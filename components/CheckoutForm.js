import {Component} from 'react';
import axios from 'axios';
import {API} from '../config';
import {CardElement, injectStripe} from 'react-stripe-elements-universal';
import DivWrapper from '../hoc/divWrapper';
import Error from '../components/Error';
import Success from '../components/Success';
import classnames from 'classnames';

class CheckoutForm extends Component {

    state = {
        subscriptionType: this.props.plan1 && this.props.plan1.id || '',
        email: '',
        isError: false,
        errorMsg: '',
        isSuccess: false,
        isProcessing: false,
        errors: {},
        plan1: this.props.plan1 || '',
        plan2: this.props.plan2 || ''
    };

    handleChange = (e) => {
        const {errors} = this.state;
        const input = e.target.name;

        if (errors[input]) {

            let errors = {...errors};
            delete errors[input];

            this.setState({[input]: e.target.value, errors});

        } else {
            this.setState({[input]: e.target.value});
        }
    };

    handleCardChange = (e) => {
        this.setState({isCardValid: e.complete});
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const {email, isCardValid, errors, subscriptionType} = this.state;

        if (email === '') errors.email = 'email is required';
        if (this._element._empty) this.setState({isCardValid: false});

        this.setState({errors});

        const isValid = Object.keys(errors).length === 0;

        if (isValid && isCardValid === true) {

            this.setState({isProcessing: true});

            this.props.stripe.createToken({name: 'Free User'}).then(({token, error}) => {

                if (error) {

                    this.setState({
                        isError: true,
                        errorMsg: error.message,
                        isSuccess: false,
                        isProcessing: false
                    });

                } else {

                    const data = {
                        email: email,
                        plan_id: subscriptionType,
                        stripe_id: token.id
                    };

                    // clear card details
                    this._element.clear();

                    axios.post(`${API}/basic/subscription`, data, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Accept': 'application/json; version=1'
                        }
                    })
                        .then(response => {
                            this.setState({
                                isError: false,
                                isSuccess: true,
                                isProcessing: false,
                                isCardValid: true
                            });
                        })
                        .catch(error => {
                            console.log(error);
                            this.setState({
                                isError: true,
                                errorMsg: error.response.status === 404 ? 'No such subscriber! Please make sure you are subscribed.' : 'Something went wrong. Please try later again.',
                                isSuccess: false,
                                isProcessing: false,
                                isCardValid: true
                            });
                        });

                }

            });

            // scroll on top
            window.scrollTo(0, 0);

        }
    };

    render() {

        const {subscriptionType, plan1, plan2, isCardValid, isError, errorMsg, isSuccess, isProcessing, errors} = this.state;

        return (
            <form onSubmit={this.handleSubmit} className="subscription__content">

                {/* left */}

                <div className="subscription__left">

                    {/* errors */}

                    {isError && <Error error={errorMsg}/>}
                    {isSuccess && <Success success="Thank you for upgrading to our premium membership. " isFromCheckout={true}/>}

                    <div className="form-group">

                        <label>Choose your subscription plan</label>

                        {/* radios */}

                        <div className="subscription__radios">

                            {/* plan 1 */}

                            <input
                                type="radio"
                                name="subscriptionType"
                                value={plan1.id}
                                id="3-months"
                                className="custom-radio-box"
                                checked={this.state.subscriptionType === plan1.id}
                                onChange={this.handleChange}
                            />

                            <label className="custom-radio-box__label" htmlFor="3-months">
                                <span className="custom-radio-box__label__visible">
                                  {plan1.nickname}
                                </span>
                                <span className="custom-radio-box__label__invisible">
                                    Only ${(plan1.amount * 0.01 / 3).toFixed(2)} per month
                                </span>
                            </label>

                            {/* plan 2 */}

                            <input
                                type="radio"
                                name="subscriptionType"
                                value={plan2.id}
                                id="annually"
                                className="custom-radio-box"
                                checked={this.state.subscriptionType === plan2.id}
                                onChange={this.handleChange}
                            />

                            <label className="custom-radio-box__label" htmlFor="annually">
                                <span className="custom-radio-box__label__visible">
                                  {plan2.nickname}
                                </span>
                                <span className="custom-radio-box__label__invisible">
                                    Only ${(plan2.amount * 0.01 / 12).toFixed(2)} per month
                                </span>
                            </label>

                        </div>

                    </div>

                    {/* email */}

                    <div className={classnames('form-group', {'has-error': errors.email})}>

                        <label htmlFor="email">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={this.state.email}
                            id="email"
                            className="form-control"
                            onChange={this.handleChange}
                        />

                        {errors.email && <p className="error-text">{errors.email}</p>}

                    </div>

                    {/* stripe */}

                    <DivWrapper>

                        <div className={classnames('form-group', {'has-error': isCardValid === false})}>

                            <label htmlFor="card">
                                Card details
                            </label>

                            <CardElement
                                hidePostalCode={true}
                                classes={{base: 'form-control StripeElement'}}
                                elementRef={(element) => this._element = element}
                                onChange={this.handleCardChange}
                            />

                            {/* {isCardValid === false && <p className="error-text">card details are invalid</p>} */}

                        </div>

                    </DivWrapper>

                    {/* submit */}
                    <button
                        type="submit"
                        className={classnames('btn btn-primary btn-block', {'btn-disabled': isProcessing})}
                        disabled={isProcessing}
                    >
                        {isProcessing ? 'Processing...' : 'Purchase'}
                    </button>

                    <p className="text-under-btn text-center">
                        <i className="ion-locked"/> Secure checkout
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
                                {subscriptionType === plan1.id ? plan1.nickname : plan2.nickname}
                            </div>
                        </div>

                        <div className="subscription__total__row">
                            <div className="subscription__total__column subscription__total__column--title">
                                Price
                            </div>
                            <div className="subscription__total__column">
                                <b>${subscriptionType === plan1.id ? (plan1.amount * 0.01).toFixed(2) : (plan2.amount * 0.01).toFixed(2)}</b>
                            </div>
                        </div>

                        <hr/>

                        <div className="subscription__total__row">
                            <div className="subscription__total__column subscription__total__column--title">
                                <b>Total</b>
                            </div>
                            <div className="subscription__total__column">
                                <b>${subscriptionType === plan1.id ? (plan1.amount * 0.01).toFixed(2) : (plan2.amount * 0.01).toFixed(2)}</b>
                            </div>
                        </div>

                        <div className="subscription__total__row">
                            <div className="subscription__total__column subscription__total__column--title">
                                All prices are in USD
                            </div>
                        </div>

                    </div>

                    <div className="subscription__guarantee">

                        <img src="/static/img/satisfaction-guaranteed.svg" alt="Satisfaction Garantee"
                             className="subscription__guarantee__image"/>

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