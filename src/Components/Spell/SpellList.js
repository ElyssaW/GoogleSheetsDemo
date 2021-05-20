import SpellFull from './SpellFull'
import SpellSlim from './SpellSlim'
import SpellTrait from './SpellComponents/SpellTrait'
import Toggle from '../Toggle'
import { Box } from '@material-ui/core'

function SpellList(props) {

    const spellList = props.spells ? props.spells.map((spell, i) => {
        return <Toggle 
            open = {
                < SpellFull spell={spell} key={`spell-${i}`} />
            }
            closed = {
                < SpellSlim spell={spell} key={`spell-${i}`} />
            }
            closeText='Close Spell' 
            openText='Open Spell'
            />
    }) : []

    return (
      <div>
          {spellList}
      </div>
    );
  }
  
  export default SpellList;
  