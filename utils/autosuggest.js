export const airports = require('./airports.json');

export function getSuggestions(value) {
	const escapedValue = value.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

	if (escapedValue === '' || escapedValue.length < 2) {
		return [];
  }

	const regex = new RegExp('^' + escapedValue, 'i');

	return airports.filter((x) => regex.test(x.name) || regex.test(x.iata));
}

export const getSuggestionValue = (suggestion) => suggestion.name;

export const renderSuggestion = (suggestion) => (
  <div>
    {suggestion.name}
  </div>
);

export function getAirportNameFromCode(airportName) {

	const airport = airports.find(x => {
		return x.iata === airportName;
	});

	return airport.name;
}