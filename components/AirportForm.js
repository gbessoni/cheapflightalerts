import {Component} from 'react';
import {airports, getSuggestions} from '../utils/autosuggest';
import Autosuggest from './UI/Autosuggest';
import axios from 'axios';
import {API} from '../config';
import {getAirportNameFromCode} from '../utils/autosuggest';
import Success from '../components/Success';
import Error from '../components/Error';

class AirportForm extends Component {

    state = {
        airport: this.props.airport && getAirportNameFromCode(this.props.airport) || '',
        airportCode: this.props.airport || '',
        suggestions: [],
        isSuccess: false,
        isError: false,
        isAirportEmtpy: false
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

        if (this.state.airport !== '') {

            const data = {
                departure_airport: this.state.airportCode
            };

            axios.put(`${API}/basic/preferences/${this.props.persistenceToken}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json; version=1'
                }
            })
                .then(response => this.setState({
                    isError: false,
                    isAirportEmtpy: false,
                    isSuccess: true
                }))
                .catch(error => {
                    this.setState({
                        isError: true,
                        isSuccess: false
                    });
                });

        } else {
            this.setState({isAirportEmtpy: true});
        }

    };

    render() {

        const {isError, isSuccess, isAirportEmtpy} = this.state;

        return (
            <div
                className="airport-form text-center"
            >

                {isError && <Error error="Oops.. Something went wrong. Please try later."/>}
                {isAirportEmtpy && <Error error="Please enter an airport."/>}
                {isSuccess && <Success success="Your preferences were successfully updated."/>}

                <form className="form-inline" onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="airportAutosuggest" className="has-error">
                            What's your preferred departure airport?
                        </label>

                        <Autosuggest
                            suggestions={this.state.suggestions}
                            onFetchSuggestions={this.onFetchSuggestions}
                            onClearSuggestions={this.onClearSuggestions}
                            onSuggestionSelected={this.onSuggestionSelected}
                            onChange={this.handleAutosuggestChange}
                            placeholder="Enter the name of your departure city or airport"
                            value={this.state.airport}
                            id="airportAutosuggest"
                            name="airport"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>

            </div>
        );
    }

}

export default AirportForm;