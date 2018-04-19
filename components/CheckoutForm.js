import { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements-universal';
import DivWrapper from '../hoc/divWrapper';

class CheckoutForm extends Component {

  state = {
    subscriptionType: '3 Months',
    cardnumber: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log('API requests will go here');
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
                value="3 Months"
                id="3-months"
                className="custom-radio-box"
                checked={this.state.subscriptionType === '3 Months'}
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
                value="Annually"
                id="annually"
                className="custom-radio-box"
                checked={this.state.subscriptionType === 'Annually'}
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
                {subscriptionType === '3 Months' ? 'Every 3 Months' : 'Annually'}
              </div>
            </div>

            <div className="subscription__total__row">
              <div className="subscription__total__column subscription__total__column--title">
                Price
              </div>
              <div className="subscription__total__column">
                <b>{subscriptionType === '3 Months' ? '$19.00' : '$49.00'}</b>
              </div>
            </div>

            <hr/>

            <div className="subscription__total__row">
              <div className="subscription__total__column subscription__total__column--title">
                <b>Total</b>
              </div>
              <div className="subscription__total__column">
                <b>{subscriptionType === '3 Months' ? '$19.00' : '$49.00'}</b>
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