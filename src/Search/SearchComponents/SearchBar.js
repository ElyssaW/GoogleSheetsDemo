import { TextField, Typography } from '@material-ui/core'

function SearchBar(props) {
    return (
      <>
      <Typography variant='h5'>Search By Spell Name</Typography>
      <TextField fullWidth={true} variant='filled' onChange={(e)=>{props.updateSearch(e)}} placeholder='Search for...' />
      </>
    );
  }
  
export default SearchBar;