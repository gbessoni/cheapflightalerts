import { Component } from 'react';
import axios from 'axios';
import { API } from '../config';
import { CardElement, injectStripe } from 'react-stripe-elements-universal';
import DivWrapper from '../hoc/divWrapper';
import Error from '../components/Error';
import Success from '../components/Success';
import classnames from 'classnames';

class CheckoutForm extends Component {

  state = {
    subscriptionType: 'default-sub-plan',
    email: '',
    isError: false,
    errorMsg: '',
    isSuccess: false,
    isProcessing: false,
    errors: {}
  }

  handleChange = (e) => {
    const { errors } = this.state;
    const input = e.target.name;

    if (errors[input]) {

      let errors = {...errors};
      delete errors[input];

      this.setState({ [input]: e.target.value, errors });

    } else {
      this.setState({ [input]: e.target.value });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email, errors,subscriptionType } = this.state;

    if (email === '') errors.email = 'email is required';
    if (this._element._empty) errors.card = 'card details are required';
    if (!this._element._complete) errors.card = 'card details are invalid';

    this.setState({ errors });

    const isValid = Object.keys(errors).length === 0;

    if (isValid) {

      this.setState({ isProcessing: true });

      this.props.stripe.createToken({name: 'Test User'}).then(({token}) => {

        const data = {
          email: email,
          plan_id: subscriptionType,
          stripe_id: token.id
        };

        axios.post(`${API}/premium/subscriptions`, data, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
          }
        })
          .then(response => {
            this.setState({
              isError: false,
              isSuccess: true,
              isProcessing: false
            });
          })
          .catch(error => {
            this.setState({
              isError: true,
              errorMsg: error.response.status === 404 ? 'No such subscriber! Please make sure you are subscribed.' : 'Oops.. Somtething went wrong. Please try later again.',
              isSuccess: false,
              isProcessing: false
            });
          });

      });

      // scroll on top
      window.scrollTo(0, 0);

    }
  }

  render() {

    const { subscriptionType, isError, errorMsg, isSuccess, isProcessing, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="subscription__content">

        {/* left */}

        <div className="subscription__left">

          {/* errors */}

          {isError && <Error error={errorMsg} />}
          {isSuccess && <Success success="You have successfully upgraded your profile!" />}

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

          <div className={classnames('form-group', { 'has-error': errors.email })}>

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

            {errors.email && <p className="error-text">{errors.email}</p>}

          </div>

          {/* stripe */}

          <DivWrapper>

            <div className={classnames('form-group', { 'has-error': errors.card })}>

              <label htmlFor="card" className="custom-label">
                Card details
              </label>

              <CardElement
                hidePostalCode={true}
                classes={{ base: 'form-control custom-input StripeElement' }}
                elementRef={(element) => this._element = element}
              />

              {errors.card && <p className="error-text">{errors.card}</p>}

            </div>

          </DivWrapper>

          {/* submit */}
          <button
            type="submit"
            className={classnames('btn btn-primary btn-block', { 'btn-disabled': isProcessing })}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Purchase'}
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