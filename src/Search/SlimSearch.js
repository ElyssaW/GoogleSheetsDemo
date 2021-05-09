import SearchBar from './SearchComponents/SearchBar'

function SlimSearch(props) {

  return (
    <div>
        <h2>Quick Search</h2>
        < SearchBar updateSearch={props.updateSearch} />
    </div>
  );
}

export default SlimSearch;
