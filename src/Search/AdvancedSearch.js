import SearchBar from './SearchComponents/SearchBar'
import Checkbox from './SearchComponents/Checkbox'
import Button from '../Components/Button'

function AdvancedSearch(props) {

  return (
    <div>
        < SearchBar updateSearch={props.updateSearch} />
        < Button onClick={props.updateSearch} />

        < Checkbox />
    </div>
  );
}

export default AdvancedSearch;
