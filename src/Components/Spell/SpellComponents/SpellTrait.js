import { Typography } from '@material-ui/core'

function SpellTrait(props) {

    const name = props.name
    const trait = props.trait ? props.trait : props.displayIfEmpty

    const display = name ? (
        <Typography variant='body1'>
            <b>{name}:</b> {trait}
        </Typography>
    ) : (
        <Typography variant='subtitle1'>
            {trait}
        </Typography>
    ) 


    return (
      <>
          {display}
      </>
    );
  }
  
  export default SpellTrait;
  