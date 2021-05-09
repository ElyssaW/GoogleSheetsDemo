function SearchBar(props) {
    return (
      <input type='text' onChange={(e)=>{props.updateSearch(e)}} />
    );
  }
  
export default SearchBar;