import SpellTrait from './SpellTrait'

function SpellBody(props) {

    const spell = props.spell

    return (
      <div>
          <div>
              < SpellTrait trait={`${spell.school} (${spell.subschool})`} />
          </div>

          <div>
              < SpellTrait name={'Casting Time'} trait={spell['casting_time']} />
          </div>

          <div>
              < SpellTrait name={'Components'} trait={spell.components} />

              {
                  spell['costly_components'] != 0 ? (
                    < SpellTrait name={'Costly Components'} trait={spell['costly_components']} />
                  ) :
                  null
              }
              
          </div>
      </div>
    );
  }
  
  export default SpellBody;
  