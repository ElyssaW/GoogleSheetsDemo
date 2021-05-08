import SpellFull from './SpellFull'
import SpellSlim from './SpellSlim'
import Toggle from './Toggle'

function SpellList(props) {

    const spellList = props.spells ? props.spells.map((spell, i) => {
        return <Toggle 
            open = {
                < SpellFull spell={spell} key={`spell-${i}`} />
            }
            closed = {
                < SpellSlim spell={spell} key={`spell-${i}`} />
            }
            />
    }) : []

    return (
      <div>
          <h2>
              Spell List
          </h2>

          {spellList}
      </div>
    );
  }
  
  export default SpellList;
  