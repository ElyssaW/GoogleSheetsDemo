import SpellHeader from './SpellComponents/SpellHeader'

function SpellSlim(props) {

  return (
    <span>
        < SpellHeader spell={props.spell} />
    </span>
  );
}

export default SpellSlim;
