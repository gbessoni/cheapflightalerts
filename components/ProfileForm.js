import { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';
import { API } from '../config';
import Error from '../components/Error';
import Success from '../components/Success';
import Link from 'next/link';

class ProfileForm extends Component {

  state = {
    errors: {},
    email: this.props.user.email || '',
    firstName: this.props.user.first_name || '',
    lastName: this.props.user.last_name || '',
    isError: false,
    isSuccess: false,
    plan: 'Loading...'
  }

  componentDidMount() {

    axios.get(`${API}/payment_plans/${this.props.user.stripe_plan_id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json; version=1'
      }
    })
      .then(response => this.setState({
        plan: response.data.nickname
      }))
      .catch(error => {
        return error;
      });

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

    this.setState({ errors });

    const isValid = Object.keys(errors).length === 0;

    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email
    };

    if (isValid) {
      axios.put(`${API}/premium/profile`, data, {
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

  }

  render() {

    const { errors, isError, isSuccess, email, firstName, lastName } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="auth-form auth-form--profile">

        <div className="auth-form__title-wrap">
          <h1 className="auth-form__title">Profile</h1>
          <Link href="/preferences">
            <a className="link">Update my preferences</a>
          </Link>
        </div>

        <h4 className="heading-plan">My plan: {this.state.plan}</h4>

        {isError && <Error error="Oops.. Something went worng." />}
        {isSuccess && <Success success="Profile was successfully updated!" />}

        {/* email */}

        <div className={classnames('form-group', { 'has-error': errors.email })}>
          <label htmlFor="email" className="custom-label">Email</label>

          <input
            type="email"
            id="email"
            name="email"
            className="form-control custom-input"
            value={email}
            onChange={this.handleChange}
          />

          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        {/* first name */}

        <div className={classnames('form-group', { 'has-error': errors.firstName })}>
          <label htmlFor="firstName" className="custom-label">First name</label>

          <input
            type="text"
            id="firstName"
            name="firstName"
            className="form-control custom-input"
            value={firstName}
            onChange={this.handleChange}
          />

          {errors.firstName && <p className="error-text">{errors.firstName}</p>}
        </div>

        {/* last name */}

        <div className={classnames('form-group', { 'has-error': errors.lastName })}>
          <label htmlFor="lastName" className="custom-label">Last name</label>

          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-control custom-input"
            value={lastName}
            onChange={this.handleChange}
          />

          {errors.lastName && <p className="error-text">{errors.lastName}</p>}
        </div>

        <button type="submit" className="btn btn-primary btn-block">Update</button>

      </form>
    );
  }
}

export default ProfileForm;