import ReactAutosuggest from 'react-autosuggest';
import { getSuggestionValue, renderSuggestion } from '../../utils/autosuggest';

const Autosuggest = (props) => (
  <ReactAutosuggest
    suggestions={props.suggestions}
    onSuggestionsFetchRequested={props.onFetchSuggestions}
    onSuggestionsClearRequested={props.onClearSuggestions}
    getSuggestionValue={getSuggestionValue}
    renderSuggestion={renderSuggestion}
    onSuggestionSelected={props.onSuggestionSelected}
    inputProps={{
      placeholder: props.placeholder,
      value: props.value,
      onChange: props.onChange,
      id: props.id,
      className: 'form-control custom-input',
      name: props.name
    }}
  />
);

export default Autosuggest;