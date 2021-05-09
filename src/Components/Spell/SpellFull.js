import React from 'react';
import ReactDOM from 'react-dom';

import SpellHeader from './SpellComponents/SpellHeader'
import SpellBody from './SpellComponents/SpellBody'

function SpellFull(props) {

  return (
    <div>
        < SpellHeader spell={props.spell} />
        < SpellBody spell={props.spell} />
    </div>
  );
}

export default SpellFull;
