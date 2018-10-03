import { Component } from 'react';
import moment from 'moment';
import { getCurrentYear, createDate, getAvailableYears } from '../../utils/date';
import classnames from 'classnames';

class DateRange extends Component {

  state = {
    year1: this.props.date1 ? moment(this.props.date1).year() : getCurrentYear(),
    year2: this.props.date2 ? moment(this.props.date2).year() : getCurrentYear(),
    month1: this.props.date1 ? moment(this.props.date1).month() : '',
    month2: this.props.date2 ? moment(this.props.date2).month() : '',
    date1: this.props.date1 || null,
    date2: this.props.date2 || null
  }

  // componentDidMount() {
  //   this.setState({
  //     date1: createDate(this.state.year1, this.state.month1, 1),
  //     date2: createDate(this.state.year2, this.state.month2, 1)
  //   });
  // }

  componentWillUpdate(nextProps, nextState) {
    const { year1, year2, month1, month2 } = this.state;

    if (nextState.year1 !== year1) {
      this.setState({ date1: createDate(nextState.year1, month1, 1) });
    }

    if (nextState.month1 !== month1) {
      this.setState({ date1: createDate(year1, nextState.month1, 1) });
    }

    if (nextState.year2 !== year2) {
      this.setState({ date2: createDate(nextState.year2, month2, 1) });
    }

    if (nextState.month2 !== month2) {
      this.setState({ date2: createDate(year2, nextState.month2, 1) });
    }

    if ((nextState.date1 !== this.state.date1) || (nextState.date2 !== this.state.date2)) {
      this.props.handleChange(nextState.date1, nextState.date2);
    }
  }

  handleChange = (e) => {
    if (e.target.value !== 'Select month' && e.target.value !== 'Select year') {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  }

  render() {

    const availableYears = getAvailableYears();

    const { isError, error } = this.state;

    console.log('CHILD', this.state.date1, this.state.date2);

    return (
      <div className="date-range">

        {/* group 1 */}

        <div className={classnames('date-range__group', { 'has-error': this.props.error })}>

          <div className="date-range__select">
            <select
              className="form-control"
              name="month1"
              value={this.state.month1}
              onChange={this.handleChange}
            >
              <option defaultValue="Select month">
                Select month
              </option>
              <option value="0">January</option>
              <option value="1">February</option>
              <option value="2">March</option>
              <option value="3">April</option>
              <option value="4">May</option>
              <option value="5">June</option>
              <option value="6">July</option>
              <option value="7">August</option>
              <option value="8">September</option>
              <option value="9">October</option>
              <option value="10">November</option>
              <option value="11">December</option>
            </select>
            <i className="ion-chevron-down"/>
          </div>

          <div className="date-range__select">
            <select
              className="form-control"
              name="year1"
              value={this.state.year1}
              onChange={this.handleChange}
            >
              <option defaultValue="Select year">
                Select year
              </option>
              {availableYears.map((year, index) => {
                return <option key={index} value={year}>{year}</option>
              })}
            </select>
            <i className="ion-chevron-down"/>
          </div>

        </div>

        {/* split */}

        <div className="date-range__split">
          <span>and</span>
        </div>

        {/* group 2 */}

        <div className={classnames('date-range__group', { 'has-error': this.props.error })}>

          <div className="date-range__select">
            <select
              className="form-control"
              name="month2"
              value={this.state.month2}
              onChange={this.handleChange}
            >
              <option defaultValue="Select month">
                Select month
              </option>
              <option value="0">January</option>
              <option value="1">February</option>
              <option value="2">March</option>
              <option value="3">April</option>
              <option value="4">May</option>
              <option value="5">June</option>
              <option value="6">July</option>
              <option value="7">August</option>
              <option value="8">September</option>
              <option value="9">October</option>
              <option value="10">November</option>
              <option value="11">December</option>
            </select>
            <i className="ion-chevron-down"/>
          </div>

          <div className="date-range__select">
            <select
              className="form-control"
              name="year2"
              value={this.state.year2}
              onChange={this.handleChange}
            >
              <option defaultValue="Select year">
                Select year
              </option>
              {availableYears.map((year, index) => {
                return <option key={index} value={year}>{year}</option>
              })}
            </select>
            <i className="ion-chevron-down"/>
          </div>

        </div>

      </div>
    );
  }

}

export default DateRange;