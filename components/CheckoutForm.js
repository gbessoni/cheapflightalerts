import { Component } from 'react';
import axios from 'axios';
import { API } from '../config';
import { CardElement, injectStripe } from 'react-stripe-elements-universal';
import DivWrapper from '../hoc/divWrapper';

class CheckoutForm extends Component {

  state = {
    subscriptionType: 'default-sub-plan',
    email: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.stripe.createToken({name: 'Test User'}).then(({token}) => {

      const data = {
        email: this.state.email,
        plan_id: this.state.subscriptionType,
        stripe_id: token.id
      };

      axios.post(`${API}/premium/subscriptions`, data, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json; version=1'
        }
      })
        .then(response => console.log(response))
        .catch(error => console.log(error));

    });
  }

  render() {

    const { subscriptionType } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="subscription__content">

        {/* left */}

        <div className="subscription__left">

          <div className="form-group">

            <label className="custom-label">Choose your subscription plan</label>

            {/* radios */}

            <div className="subscription__radios">

              <input
                type="radio"
                name="subscriptionType"
                value="default-sub-plan"
                id="3-months"
                className="custom-radio-box"
                checked={this.state.subscriptionType === 'default-sub-plan'}
                onChange={this.handleChange}
              />

              <label className="custom-radio-box__label" htmlFor="3-months">
                <span className="custom-radio-box__label__visible">
                  3 MONTHS $19
                </span>
                <span className="custom-radio-box__label__invisible">
                  Only $6.33 per month
                </span>
              </label>

              <input
                type="radio"
                name="subscriptionType"
                value="annual"
                id="annually"
                className="custom-radio-box"
                checked={this.state.subscriptionType === 'annual'}
                onChange={this.handleChange}
              />

              <label className="custom-radio-box__label" htmlFor="annually">
                <span className="custom-radio-box__label__visible">
                  Annually $49 (save 55%)
                </span>
                <span className="custom-radio-box__label__invisible">
                  Only $4.08 per month
                </span>
              </label>

            </div>

          </div>

          {/* email */}

          <div className="form-group">

            <label htmlFor="email" className="custom-label">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={this.state.email}
              id="email"
              className="form-control custom-input"
              onChange={this.handleChange}
            />

          </div>

          {/* stripe */}

          <DivWrapper>

            <div className="form-group">
              <label htmlFor="card" className="custom-label">
                Card details
              </label>
              <CardElement
                hidePostalCode={true}
                classes={{ base: 'form-control custom-input StripeElement' }}
              />
            </div>

          </DivWrapper>

          {/* submit */}

          <button
            type="submit"
            className="btn btn-primary btn-block"
          >
            Purchase
          </button>

          <p className="text-under-btn text-center">
            <i className="ion-locked" /> Secure checkout
          </p>

        </div>

        {/* right */}

        <div className="subscription__right">

          <div className="subscription__total">

            <div className="subscription__total__row">
              <div className="subscription__total__column subscription__total__column--title">
                Plan
              </div>
              <div className="subscription__total__column">
                {subscriptionType === 'default-sub-plan' ? 'Every 3 Months' : 'Annually'}
              </div>
            </div>

            <div className="subscription__total__row">
              <div className="subscription__total__column subscription__total__column--title">
                Price
              </div>
              <div className="subscription__total__column">
                <b>{subscriptionType === 'default-sub-plan' ? '$19.00' : '$49.00'}</b>
              </div>
            </div>

            <hr/>

            <div className="subscription__total__row">
              <div className="subscription__total__column subscription__total__column--title">
                <b>Total</b>
              </div>
              <div className="subscription__total__column">
                <b>{subscriptionType === 'default-sub-plan' ? '$19.00' : '$49.00'}</b>
              </div>
            </div>

            <div className="subscription__total__row">
              <div className="subscription__total__column subscription__total__column--title">
                All prices are in USD
              </div>
            </div>

          </div>

          <div className="subscription__guarantee">

            <img src="/static/img/satisfaction-guaranteed.svg" alt="Satisfaction Garantee" className="subscription__guarantee__image" />

            <div className="subscription__guarantee__title">
              <h4>30 days Money Back Guarantee</h4>
            </div>

          </div>

        </div>

      </form>
    );
  }
}

export default injectStripe(CheckoutForm);