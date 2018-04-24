import { Component } from 'react';
import axios from 'axios';
import { API } from '../config';
import Error from '../components/Error';
import Success from '../components/Success';

class EmailConfirmForm extends Component {

  state = {
    isError: false,
    isSuccess: false
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios.get(`${API}/basic/email_confirm/${this.props.persistenceToken}`, {
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

  render() {

    const { isError, isSuccess } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>

        {isError && <Error error="Oops.. Something went worng." />}

        {isSuccess && <Success success="Your email was confirmed!" isFromEmailConfirm={true} />}

        <button type="submit" className="btn btn-cta btn-lg btn-block">Confirm my email</button>

      </form>
    );
  }

}

export default EmailConfirmForm;