import React from 'react';
import { Box } from '@material-ui/core'
import ReactDOM from 'react-dom';

import SpellHeader from './SpellComponents/SpellHeader'
import SpellBody from './SpellComponents/SpellBody'

function SpellFull(props) {

  return (
    <Box boxShadow={2} borderLeft={1} borderColor='tomato' p={4} m={2}>
        < SpellHeader spell={props.spell} />
        < SpellBody spell={props.spell} />
    </Box>
  );
}

export default SpellFull;
