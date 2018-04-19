import { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import classnames from 'classnames';
import { initStore } from '../redux';
import actions from '../redux/actions';
import initialize from '../utils/initialize';
import Layout from '../components/Layout';
import Error from '../components/Error';

class Login extends Component {

  state = {
    email: '',
    password: '',
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

    const { email, password } = this.state;
    let errors = {};

		if (email === '') errors.email = 'email is required';
    if (password === '') errors.password = 'password is required';

    this.setState({ errors });

    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      this.props.authenticate({ email, password }, 'premium/sign_in');
    }
  }

  render() {

    const { errors } = this.state;

    return (
      <Layout title="Premium Membership Login">

        <form onSubmit={this.handleSubmit} className="auth-form">

          <h1 className="auth-form__title">Premium Membership Login</h1>

          {this.props.error && <Error error={this.props.error} />}

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

          <button type="submit" className="btn btn-primary btn-block">Submit</button>

          <p className="auth-text">
            Not a Member yet, <Link href="/"><a className="link">click here</a></Link> to start receiving cheap flight alerts.
          </p>

        </form>

      </Layout>
    );
  }

}

const mapStateToProps = (state) => (
  { error: state.authentication.error }
);

export default withRedux(initStore, mapStateToProps, actions)(Login);