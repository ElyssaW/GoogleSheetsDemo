import { TextField, Typography } from '@material-ui/core'

function SearchBar(props) {
    return (
      <>
      <TextField fullWidth={true} variant='outlined' onChange={(e)=>{props.updateSearch(e)}} placeholder='Search for...' />
      </>
    );
  }
  
export default SearchBar;