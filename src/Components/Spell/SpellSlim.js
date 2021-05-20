import SpellHeader from './SpellComponents/SpellHeader'
import { Box } from '@material-ui/core'

function SpellSlim(props) {

  return (
    <Box >
        < SpellHeader spell={props.spell} />
    </Box>
  );
}

export default SpellSlim;
