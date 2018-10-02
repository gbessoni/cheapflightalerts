import {Component} from 'react';
import withRedux from 'next-redux-wrapper';
import {initStore} from '../redux';
import initialize from '../utils/initialize';
import axios from 'axios';
import {API} from '../config';
import Layout from '../components/Layout';
import classnames from 'classnames';
import Success from '../components/Success';
import Error from '../components/Error';
import Link from 'next/link';

class ResetPassword extends Component {

    state = {
        email: '',
        isError: false,
        isSuccess: false,
        errors: {}
    }

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
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {email} = this.state;
        let errors = {};

        if (email === '') errors.email = 'email is required';

        this.setState({errors});

        const isValid = Object.keys(errors).length === 0;

        if (isValid) {

            axios.post(`${API}/premium/password_reset`, {email}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json; version=1'
                }
            })
                .then(response => this.setState({
                    isError: false,
                    isSuccess: true
                }))
                .catch(error => {
                    this.setState({
                        isError: true,
                        isSuccess: false
                    });
                });
        }

    }

    render() {

        const {isError, isSuccess, errors} = this.state;

        return (
            <Layout title="Cheap Flight Alerts | Reset password">
                <div className="container">

                    <form onSubmit={this.handleSubmit} className="auth-form auth-form--reset-password">

                        <h1 className="auth-form__title">Reset Password</h1>

                        {isError && <Error error="No such subscriber!"/>}

                        {isSuccess && <Success success="Please check your email to set a new password."/>}

                        <div className={classnames('form-group', {'has-error': errors.email})}>
                            <input
                                type="email"
                                className="form-control custom-input"
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            {errors.email && <p className="error-text">{errors.email}</p>}
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Reset Password</button>

                        <p className="auth-text">
                            Back to <Link href="/login"><a className="link">login</a></Link>.
                        </p>

                    </form>

                </div>
            </Layout>
        );
    }
}

ResetPassword.getInitialProps = function (ctx) {
    initialize(ctx);
};

export default withRedux(initStore)(ResetPassword);