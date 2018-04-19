import { Component } from 'react';
import axios from 'axios';
import { API } from '../config';
import Router from 'next/router';

class SubscribeForm extends Component {

  state = {
    email: '',
    btnDisabled: true,
    isSubscribed: false,
    isError: false
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
      btnDisabled: e.target.value && false
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    console.log('Subscribe form submitted:', this.state.email);

    axios.post(`${API}/basic/sign_up`, {
      email: this.state.email
     }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json; version=1'
      }
    })
      .then(response => {
        this.setState({ isError: false, isSubscribed: true });

        const persistenceToken = response.data.user.persistence_token;
        Router.push(`/welcome?persistence_token=${persistenceToken}`);
      })
      .catch(error => {
        this.setState({
          isError: true,
          isSuccess: false
        });
      });
  }

  render() {

    const { isSubscribed, isError } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="subscribe-form text-center">

        {isSubscribed && <p className="subscribe-form__success-text">Thank you for subscribing!</p>}

        {isError && <p className="subscribe-form__error-text">Error! This email is already used.</p>}

        <input
          type="email"
          placeholder="Enter your BEST email for cheap flight deals"
          onChange={this.handleChange}
        />

        <button
          type="submit"
          disabled={this.state.btnDisabled}
          className="btn-cta"
        >
          {this.props.btnText}
        </button>

        <p>No spam, unsubscribe at any time</p>

      </form>
    );
  }

}

export default SubscribeForm;