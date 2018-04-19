import { Component } from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { airports, getSuggestions, getAirportNameFromCode } from '../utils/autosuggest';
import Autosuggest from '../components/UI/Autosuggest';
import Select from '../components/UI/Select';
import { validateDates } from '../utils/date';
import axios from 'axios';
import { API } from '../config';
import Success from '../components/Success';
import Error from '../components/Error';
import DateRange from '../components/UI/DateRange';
import DivWrapper from '../hoc/divWrapper';

class PreferencesForm extends Component {

  state = {
    email: this.props.premiumUser && this.props.premiumUser.email || '',
    flightType: this.props.premiumUser && this.props.premiumUser.preference.flight_type || 'domestic',
    isSubscribed: false,
    destination: '',
    suggestions: [],
    destinations: this.props.premiumUser && this.props.premiumUser.preference.destination_airports || [],
    dateType: this.props.premiumUser && (this.props.premiumUser.preference.start_date || this.props.premiumUser.preference.finish_date) ? 'date2' : 'date1',
    departure: this.props.basicUser && this.props.basicUser.preference.departure_airport && getAirportNameFromCode(this.props.basicUser.preference.departure_airport) || '',
    departures: this.props.premiumUser && this.props.premiumUser.preference.departure_airports || [],
    startDate: this.props.premiumUser ? this.props.premiumUser.preference.start_date : null,
    finishDate: this.props.premiumUser ? this.props.premiumUser.preference.finish_date : null,
    errors: {},
    isError: false,
    isSuccess: false,
    isBasicDepartureEmtpy: false,
    isPremiumEmailTaken: false
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

  // Checkbox

  handleCheckboxChange = (e) => {
    this.setState({ isSubscribed: e.target.checked });
  }

  // Autosuggest

  handleAutosuggestDestinationChange = (e, { newValue }) => {
    this.setState({ destination: newValue });
  }

  handleAutosuggestDepartureChange = (e, { newValue }) => {
    this.setState({ departure: newValue });
  }

  onFetchSuggestions = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onClearSuggestions = () => {
    this.setState({
      suggestions: []
    });
  };

  onSuggestionDestinationSelected = () => {
    setTimeout(() => {

      let destinations = this.state.destinations;
      const destinationValue = this.state.destination;

      const destination = airports.find(x => {
        return x.name === destinationValue;
      });

      destinations.push(destination.iata);
      destinations = [...new Set(destinations)];

      this.setState({ destination: '', destinations });

    }, 100);
  }

  onSuggestionDepartureSelected = () => {
    setTimeout(() => {

      let departures = this.state.departures;
      const departureValue = this.state.departure;

      const isPremium = this.props.isPremium;

      const departure = airports.find(x => {
        return x.name === departureValue;
      });

      if (isPremium) {
        departures.push(departure.iata);
        departures = [...new Set(departures)];
        this.setState({ departure: '', departures });
      } else {
        departures.push(departure.iata);
        this.setState({ departures });
      }

    }, 100);
  }

  // Remove destination

  removeDestination = (index) => {
    const destinations = this.state.destinations;
    destinations.splice(index, 1);
    this.setState({ destinations });
  }

  removeDeparture = (index) => {
    const departures = this.state.departures;
    departures.splice(index, 1);
    this.setState({ departures });
  }

  // Dates change

  handleDatesChanged = (date1, date2, isError) => {
    this.setState({
      startDate: date1,
      finishDate: date2,
      isDatesInvalid: isError
    });
  }

  // Submit

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      email,
      flightType,
      isSubscribed,
      departures,
      destinations,
      dateType,
      startDate,
      finishDate,
      isDatesInvalid
    } = this.state;

    const { isPremium, premiumToken, basicUser, persistenceToken } = this.props;

    // validation

    let errors = {};

    if (isPremium && (email === '' || email === 'undefined')) errors.email = 'email is required';
    if (dateType === 'date2' && !validateDates(startDate, finishDate)) errors.dates = 'Dates are invalid. Maximum range between dates is 18 months.';

    this.setState({ errors });

    const isValid = Object.keys(errors).length === 0;

    // request

    if (isValid) {

      // request for premium users

      if (isPremium) {

        const preferencesData = {
          departure_airports: departures,
          destination_airports: destinations,
          flight_type: flightType,
          start_date: dateType === 'date2' ? startDate : null,
          finish_date: dateType === 'date2' ? finishDate : null,
          is_subscribed: isSubscribed
        };

        const profileData = { email };

        axios.all([

          axios.put(`${API}/premium/preference`, preferencesData, {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json; version=1',
              'Access-Token': premiumToken
            }
          }).catch(error => this.setState({ isError: true, isSuccess: false })),

          axios.put(`${API}/premium/profile`, profileData, {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json; version=1',
              'Access-Token': premiumToken
            }
          }).catch(error => this.setState({ isPremiumEmailTaken: true, isSuccess: false }))

        ])
          .then(axios.spread((preferenceRes, profileRes) => {
            if (preferenceRes.status === 200 && profileRes.status === 200) {
              this.setState({ isError: false, isPremiumEmailTaken: false, isSuccess: true });
            }
          }));

      } else {

        // request for basic users

        const airport = airports.find(x => {
          return x.name === this.state.departure;
        });

        if (this.state.departure !== '') {

          const data = { departure_airport: airport.iata };

          axios.put(`${API}/basic/preferences/${this.props.persistenceToken}`, data, {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json; version=1'
            }
          })
            .then(response => this.setState({
              isError: false,
              isBasicDepartureEmtpy: false,
              isSuccess: true
            }))
            .catch(error => {
              this.setState({
                isError: true,
                isSuccess: false
              });
            });

        } else {
          this.setState({
            isBasicDepartureEmtpy: true
          });
        }

      }

      // scroll on top
      window.scrollTo(0, 0);

    }
  }

  render() {

    const { destinations, dateType, departures, errors, isError, isSuccess, isBasicDepartureEmtpy, isPremiumEmailTaken } = this.state;

    const { isPremium } = this.props;

    console.log('PARENT', this.state.startDate, this.state.finishDate);

    return (
      <form onSubmit={this.handleSubmit} className="preferences-form">

        {isError && <Error error="Oops.. Something went wrong. Please try later." />}
        {isBasicDepartureEmtpy && <Error error="Please enter an airport." />}
        {isPremiumEmailTaken && <Error error="This email is already used." />}
        {isSuccess && <Success success="Your preferences were successfully updated." />}

        {/* email */}

        {isPremium && (
          <div className={classnames('form-group', { 'has-error': errors.email })}>
            <label className="custom-label" htmlFor="email">Preferred email</label>
            <input
              type="email"
              name="email"
              placeholder="youremail@email.com"
              id="email"
              className="form-control custom-input"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>
        )}

        {/* departures */}

        <div className="form-group">

          <label className="custom-label" htmlFor="departureAutosuggest">
            🛫 Choose your departure airport {!isPremium && <span>(select more than one - <Link href="/subscription"><a className="link">Premium</a></Link> only)</span>}
          </label>

          <Autosuggest
            suggestions={this.state.suggestions}
            onFetchSuggestions={this.onFetchSuggestions}
            onClearSuggestions={this.onClearSuggestions}
            onSuggestionSelected={this.onSuggestionDepartureSelected}
            onChange={this.handleAutosuggestDepartureChange}
            placeholder="Type an airport"
            value={this.state.departure}
            id="departureAutosuggest"
            name="departure"
          />

          {!isPremium && (
            <p className="text-under-btn">Upgrade to<Link href="/subscription"><a className="link">Premium</a></Link> to select more than one specific airports you want to depart from</p>
          )}

          {!isPremium && (
            <button type="submit" className="btn btn-primary btn-block">Save my preferences</button>
          )}

          {isPremium && (
            <ol className="preferences-form__list">
              {departures && departures.map((departure, index) => {
                return <li key={index}>
                  {departure}
                  <i
                    className="ion-close-circled"
                    onClick={this.removeDeparture.bind(this, index)}
                  />
                </li>;
              })}
            </ol>
          )}

        </div>

        {/* if premiumUser is premium */}

        <div className={classnames('', { 'preferences-form__disabled': !isPremium })}>

          {/* flight type radios */}

          <div className="form-group">

            <label className="custom-label">✈️ Flight type</label>

            <div>
              <label className="custom-radio">
                <input
                  type="radio"
                  value="domestic"
                  name="flightType"
                  checked={this.state.flightType === 'domestic'}
                  onChange={this.handleChange}
                />
                <div className="custom-radio__text">Domestic Only</div>
              </label>
            </div>

            <div>
              <label className="custom-radio">
                <input
                  type="radio"
                  value="international"
                  name="flightType"
                  checked={this.state.flightType === 'international'}
                  onChange={this.handleChange}
                />
                <div className="custom-radio__text">International Only</div>
              </label>
            </div>

            <div>
              <label className="custom-radio">
                <input
                  type="radio"
                  value="both"
                  name="flightType"
                  checked={this.state.flightType === 'both'}
                  onChange={this.handleChange}
                />
                <div className="custom-radio__text">Both (premium version only)</div>
              </label>
            </div>

          </div>

          {/* subscribe checkbox */}

          <div className="form-group">
            <label className="custom-label custom-checkbox">
              <input
                type="checkbox"
                id="isSubscribed"
                value={this.state.isSubscribed}
                onChange={this.handleCheckboxChange}
              />
              <div className="custom-checkbox__text">
                🥂 Receive 80% off deals on First Class and Business Class seats?
              </div>
            </label>
          </div>

          {/* destinations */}

          <div className="form-group">

            <label className="custom-label" htmlFor="destinationAutosuggest">
              🛬 Add Destinations vs Take me anywhere
            </label>

            <Autosuggest
              suggestions={this.state.suggestions}
              onFetchSuggestions={this.onFetchSuggestions}
              onClearSuggestions={this.onClearSuggestions}
              onSuggestionSelected={this.onSuggestionDestinationSelected}
              onChange={this.handleAutosuggestDestinationChange}
              placeholder="Enter a destination airport"
              value={this.state.destination}
              id="destinationAutosuggest"
              name="destination"
            />

            <ol className="preferences-form__list">
              {destinations && destinations.map((destination, index) => {
                return <li key={index}>
                  {destination}
                  <i
                    className="ion-close-circled"
                    onClick={this.removeDestination.bind(this, index)}
                  />
                </li>;
              })}
            </ol>

          </div>

          {/* dates */}

          <div className="form-group">

            <label className="custom-label">📅 Add When to Fly Dates</label>

            <div>
              <label className="custom-radio">
                <input
                  type="radio"
                  value="date1"
                  name="dateType"
                  checked={this.state.dateType === 'date1'}
                  onChange={this.handleChange}
                />
                <div className="custom-radio__text">Anytime</div>
              </label>
            </div>

            <div>
              <label className="custom-radio">
                <input
                  type="radio"
                  value="date2"
                  name="dateType"
                  checked={this.state.dateType === 'date2'}
                  onChange={this.handleChange}
                />
                <div className="custom-radio__text">Sometime between</div>
              </label>
            </div>

            {/* months */}

            {dateType === 'date2' && (
              <DivWrapper>
                <DateRange
                  date1={this.state.startDate}
                  date2={this.state.finishDate}
                  handleChange={this.handleDatesChanged}
                  error={!validateDates(this.state.startDate, this.state.finishDate)}
                />
                {errors.dates && <p className="error-text">{errors.dates}</p>}
              </DivWrapper>
            )}

          </div>

        </div>

        {!isPremium && (
          <Link href="/subscription"><button className="btn btn-primary btn-block btn-primary--link">Upgrade to Access these preferences above</button></Link>
        )}

        {isPremium && (
          <button type="submit" className="btn btn-primary btn-block">Save my preferences</button>
        )}

      </form>
    );
  }

}

export default PreferencesForm;