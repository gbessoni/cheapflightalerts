import {Component} from 'react';
import axios from 'axios';
import {API} from '../config';
import Router from 'next/router';
import {getCookie} from '../utils/cookie-default';
import {airports, getSuggestions} from '../utils/autosuggest';
import Autosuggest from './UI/Autosuggest';
import {getAirportNameFromCode} from '../utils/autosuggest';


class SubscribeForm extends Component {

    state = {
        email: '',
        isSubscribed: false,
        isError: false,
        suggestions: [],
        airport: this.props.airport && getAirportNameFromCode(this.props.airport) || '',
        airportCode: this.props.airport || '',
        isAirportEmtpy: false
    };

    handleChange = (e) => {
        this.setState({email: e.target.value});
    };

    handleAutosuggestChange = (e, {newValue}) => {
        this.setState({airport: newValue});
    };

    onFetchSuggestions = ({value}) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onClearSuggestions = () => {
        this.setState({
            suggestions: []
        });
    };

    onSuggestionSelected = () => {
        setTimeout(() => {

            const airportValue = this.state.airport;

            const airport = airports.find(x => {
                return x.name === airportValue;
            });

            this.setState({airportCode: airport.iata});

        }, 100);
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const email = this.state.email;

        if (email === '') this.setState({isError: true, msg: 'Email is required'});

        if (email !== '') {

            const source = getCookie('referrerURL');

            axios.post(`${API}/basic/sign_up`, {
                email: this.state.email,
                departure_airport: this.state.airportCode,
                source
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json; version=1'
                }
            })
                .then(response => {
                    this.setState({isError: false, isSubscribed: true, msg: 'Thank you for subscribing!'});

                    const persistenceToken = response.data.user.persistence_token;
                    Router.push(`/welcome?persistence_token=${persistenceToken}`);
                })
                .catch(error => {
                    this.setState({isError: true, isSubscribed: false, msg: 'This email is already used.'});
                });
        }
    };

    render() {

        const {isSubscribed, isError, msg} = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit} className="subscribe-form">

                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Enter email address"
                            onChange={this.handleChange}
                            className={'form-control ' + [isError && 'with-error', isSubscribed && 'with-success'].filter(e => !!e).join(' ')}
                        />
                        {isSubscribed && <p className="success-text text-center">{msg}</p>}
                        {isError && <p className="error-text text-center">{msg}</p>}
                    </div>

                    <div className="form-group">
                        <Autosuggest
                            suggestions={this.state.suggestions}
                            onFetchSuggestions={this.onFetchSuggestions}
                            onClearSuggestions={this.onClearSuggestions}
                            onSuggestionSelected={this.onSuggestionSelected}
                            onChange={this.handleAutosuggestChange}
                            placeholder="Enter departure city or airport"
                            value={this.state.airport}
                            id="airportAutosuggest"
                            name="airport"
                        />
                    </div>

                    <div className="form-group text-center">
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            {this.props.btnText}
                        </button>

                        <p>No spam, unsubscribe at any time</p>
                    </div>

                </form>
            </div>
        );
    }

}

export default SubscribeForm;