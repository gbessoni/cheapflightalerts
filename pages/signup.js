import { Component } from 'react';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import classnames from 'classnames';
import { initStore } from '../redux';
import actions from '../redux/actions';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import Error from '../components/Error';
import Success from '../components/Success';

class Signup extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    errors: {}
  }

  static getInitialProps(ctx) {
    initialize(ctx);
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

    const { firstName, lastName, email, password, confirmPassword } = this.state;
    let errors = {};

    if (firstName === '') errors.firstName = 'first name is required';
    if (lastName === '') errors.lastName = 'last name is required';
    if (email === '') errors.email = 'email is required';
    if (password === '') errors.password = 'password is required';
    if (password !== '' && password.length < 6) errors.password = 'password must contain at least 6 characters';
    if (password !== confirmPassword) errors.confirmPassword = "passwords don't match";

    this.setState({ errors });

    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      this.props.register({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
      }, 'premium/sign_up');

      // scroll on top
      window.scrollTo(0, 0);
    }

  }

  render() {

    const { errors } = this.state;
    const { error, success } = this.props;

    return (
      <Layout title="Signup">

        <form onSubmit={this.handleSubmit} className="auth-form">

          <h1 className="auth-form__title">Sign up</h1>

          {error && <Error error={error} />}

          {success && <Success success={success} isFromSignup={true} />}

          <div className={classnames('form-group', { 'has-error': errors.firstName })}>
            <input
              type="text"
              className="form-control custom-input"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
            />
            {errors.firstName && <p className="error-text">{errors.firstName}</p>}
          </div>

          <div className={classnames('form-group', { 'has-error': errors.lastName })}>
            <input
              type="text"
              className="form-control custom-input"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
            />
            {errors.lastName && <p className="error-text">{errors.lastName}</p>}
          </div>

          <div className={classnames('form-group', { 'has-error': errors.email })}>
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

          <div className={classnames('form-group', { 'has-error': errors.password })}>
            <input
              type="password"
              className="form-control custom-input"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <div className={classnames('form-group', { 'has-error': errors.confirmPassword })}>
            <input
              type="password"
              className="form-control custom-input"
              placeholder="Confirm password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
            {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
          </div>

          <button type="submit" className="btn btn-primary btn-block">Submit</button>

          <p className="auth-text">
            If you're already a premium member <Link href="/login"><a className="link">Log in</a></Link>
          </p>

        </form>

      </Layout>
    );
  }

}

const mapStateToProps = (state) => (
  {
    error: state.authentication.error,
    success: state.authentication.success
  }
);

export default withRedux(initStore, mapStateToProps, actions)(Signup);