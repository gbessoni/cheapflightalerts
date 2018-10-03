import {Component} from 'react';
import classnames from 'classnames';
import axios from 'axios';
import {API} from '../config';
import Error from '../components/Error';
import Success from '../components/Success';
import Link from 'next/link';

class NewPasswordForm extends Component {

    state = {
        password: '',
        confirmPassword: '',
        errors: {},
        isError: false,
        isSuccess: false
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

    handleSubmit = (e) => {
        e.preventDefault();

        const {password, confirmPassword} = this.state;
        let errors = {};

        if (password === '') errors.password = 'password is required';
        if (password !== '' && password.length < 6) errors.password = 'password must contain at least 6 characters';
        if (password !== confirmPassword) errors.confirmPassword = "passwords don't match";

        this.setState({errors});

        const isValid = Object.keys(errors).length === 0;

        if (isValid) {

            const data = {
                perishable_token: this.props.perishableToken,
                password
            };

            axios.put(`${API}/premium/password_reset`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json; version=1',
                    'Access-Token': this.props.token
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

            // scroll on top
            window.scrollTo(0, 0);
        }

    };

    render() {

        const {errors, isError, isSuccess, password, confirmPassword} = this.state;

        return (

            <form onSubmit={this.handleSubmit} className="auth-form">

                <h1 className="auth-form__title">New Password</h1>

                {isError && <Error error="Oops.. Something went worng."/>}
                {isSuccess && <Success success="Password was successfully updated!"/>}

                <div className={classnames('form-group', {'has-error': errors.password})}>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                    {errors.password && <p className="error-text">{errors.password}</p>}
                </div>

                <div className={classnames('form-group', {'has-error': errors.confirmPassword})}>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                    />
                    {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>

                <p className="auth-text">
                    Back to <Link href="/login"><a className="link">login</a></Link>.
                </p>

            </form>

        );
    }

}

export default NewPasswordForm;