import SpellTrait from './SpellTrait'

function SpellBody(props) {

    const spell = props.spell

    return (
      <div>
          <div>
              < SpellTrait trait={`${spell.school} (${spell.subschool ? spell.subschool : 'No Subschool'})`} />
          </div>

          <div>
              < SpellTrait name={'Casting Time'} trait={spell['castingtime']} displayIfEmpty='None' />
          </div>

          <div>
              < SpellTrait name={'Components'} trait={spell.components} displayIfEmpty='None' />

              { spell['costlycomponents'] != 0 ? (
                    < SpellTrait name={'Costly Components'} trait={spell['costlycomponents']} />
                  ) :
                  null
              }
          </div>

          <div>
              < SpellTrait name={'Range'} trait={spell['range']} displayIfEmpty='N/A' /> 
              < SpellTrait name={'Area'} trait={spell['area']} displayIfEmpty='N/A' /> 
          </div>

          
          <div>
              < SpellTrait name={'Effects'} trait={spell['effects']} displayIfEmpty='No effects' /> 
              < SpellTrait name={'Target'} trait={spell['target']} displayIfEmpty='N/A' /> 
              < SpellTrait name={'Duration'} trait={spell['duration']} displayIfEmpty='None' /> 
          </div>

          
          <div>
              < SpellTrait name={'Saving Throw'} trait={spell['savingthrow']} displayIfEmpty='No save' /> 
              < SpellTrait name={'Spell Resistence'} trait={spell['spellresistence']} displayIfEmpty='N/A' /> 
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
  