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

              { spell['costly_components'] != 0 ? (
                    < SpellTrait name={'Costly Components'} trait={spell['costly_components']} />
                  ) :
                  null
              }
          </div>

          <div>
              < SpellTrait name={'Range'} trait={spell['range']} /> 
              < SpellTrait name={'Area'} trait={spell['area']} /> 
          </div>

          
          <div>
              < SpellTrait name={'Effects'} trait={spell['effects']} /> 
              < SpellTrait name={'Target'} trait={spell['target']} /> 
              < SpellTrait name={'duration'} trait={spell['duration']} /> 
          </div>

          
          <div>
              < SpellTrait name={'Saving Throw'} trait={spell['saving_throw']} /> 
              < SpellTrait name={'Spell Resistence'} trait={spell['spell_resistence']} /> 
          </div>

          <div>
              < SpellTrait trait={spell['description']} />  
          </div>

          <div>
              < SpellTrait name={'Source'} trait={spell['source']} />  
          </div>
      </div>
    );
  }
  
  export default SpellBody;
  