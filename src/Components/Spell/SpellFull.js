import React from 'react';
import { Box } from '@material-ui/core'
import ReactDOM from 'react-dom';

import SpellHeader from './SpellComponents/SpellHeader'
import SpellBody from './SpellComponents/SpellBody'

function SpellFull(props) {

  return (
    <Box>
        < SpellHeader spell={props.spell} />
        < SpellBody spell={props.spell} />
    </Box>
  );
}

export default SpellFull;
