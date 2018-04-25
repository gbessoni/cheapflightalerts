import moment from 'moment';

export function createDate(year, month, day) {
  let date = new Date(year, month, day);
  date = moment(date).format('YYYY-MM-DD');

  return date;
}

export function formatDate(month) {
  const date = new Date(new Date().getFullYear(), month, 1);

  return moment(date).format('YYYY-MM-DD');
}

export function getCurrentYear() {
  return (new Date()).getFullYear();
}

export function getMonth(dateString) {
  const date  = new Date(dateString);

  return date.getMonth();
}

export function getDatesDifference(date1, date2) {
  let months;

  months = (date2.getFullYear() - date1.getFullYear()) * 12;
  months -= date1.getMonth();
  months += date2.getMonth();

  return months <= 0 ? 0 : months;
}

export function getAvailableYears() {
  let years = [];

  const startDate = moment(new Date());
  const startYear = startDate.year();

  const endDate = moment(new Date()).add(18, 'month');
  const endYear = endDate.year();

  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }

  return years;
}

export function validateDates(date1, date2) {

  let isValid = false;

  if (moment(date1) > moment(date2)) {
    isValid = false;

  } else if (getDatesDifference(new Date(date1), new Date(date2)) > 18) {
    isValid = false;

  } else {
    isValid = true;
  }

  return isValid;

}

export function getDateBeforeCurrent(days) {
  const currentDate = moment();

  const dateBefore = currentDate.subtract(days, 'd');

  return dateBefore.format('LL');
}