import { Typography } from '@material-ui/core'

function SpellHeader(props) {

    return (
      <Typography variant='h4'>
          {props.spell.name}
      </Typography>
    );
  }
  
  export default SpellHeader;
  