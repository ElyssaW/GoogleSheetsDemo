import CheckboxBank from './CheckboxBank'
import RadioBank from './Radio'

function SearchOptions(props) {

  return (
<div className='row'>
          <div className='checkbox-group'>
            <CheckboxBank 
              title='Save'
              name='savingthrow'
              handleClick={props.handleClick}
              boxes = {[
                {
                  label: 'None',
                  value: 'None'
                }, {
                  label: 'Will',
                  value: 'will'
                }, {
                  label: 'Reflex',
                  value: 'Reflex'
                }, {
                  label: 'Fortitude',
                  value: 'Fortitude'
                }, {
                  label: 'Other',
                  value: ''
                }
              ]}
            />

            <CheckboxBank 
              title='Duration'
              name='duration'
              handleClick={props.handleClick}
              boxes = {[
                {
                  label: 'Instantenous',
                  value: 'instantenous'
                }, {
                  label: 'Permenant',
                  value: 'permenant'
                }, {
                  label: 'Concentration',
                  value: 'concentration'
                }, {
                  label: '1 roud/level',
                  value: 'round'
                }, {
                  label: '1 minute/level',
                  value: '1 minute'
                }, {
                  label: '10 minutes/level',
                  value: '10 minutes'
                }, {
                  label: '1 hour/level',
                  value: 'hour'
                }, {
                  label: '1 day/level',
                  value: 'day'
                }, {
                  label: 'Other',
                  value: ''
                }
              ]}
            />

            <CheckboxBank 
              title='Area'
              name='area'
              handleClick={props.handleClick}
              boxes = {[
                {
                  label: 'Radius',
                  value: 'radius'
                }, {
                  label: 'Cone',
                  value: 'cone'
                }, {
                  label: 'Line',
                  value: 'line'
                }, {
                  label: 'Ray',
                  value: 'ray'
                }, {
                  label: 'Melee Touch Attack',
                  value: 'melee touch attack'
                }, {
                  label: 'Ranged Touch Attack',
                  value: 'ranged'
                }, {
                  label: 'Other',
                  value: ''
                }, {
                  label: 'None',
                  value: 'none'
                }
              ]}
            />

            <CheckboxBank 
              title='Range'
              name='range'
              handleClick={props.handleClick}
              boxes = {[
                {
                  label: 'Long',
                  value: 'long'
                }, {
                  label: 'Medium',
                  value: 'medium'
                }, {
                  label: 'Close',
                  value: 'close'
                }, {
                  label: 'Touch',
                  value: 'touch'
                }, {
                  label: 'Personal',
                  value: 'Personal'
                }, {
                  label: 'Other',
                  value: ''
                }
              ]}
            />

            <CheckboxBank 
              title='School'
              name='school'
              handleClick={props.handleClick}
              boxes = {[
                {
                  label: 'Abjuration',
                  value: 'abjuration'
                }, {
                  label: 'Conjuration',
                  value: 'conjuration'
                },, {
                  label: 'Divination',
                  value: 'divination'
                }, {
                  label: 'Evocation',
                  value: 'evocation'
                }, {
                  label: 'Enchantment',
                  value: 'enchantment'
                }, {
                  label: 'Illusion',
                  value: 'illusion'
                }, {
                  label: 'Necromancy',
                  value: 'necromancy'
                }, {
                  label: 'Transmutation',
                  value: 'transmutation'
                }
              ]}
            />

            <CheckboxBank 
              title='Components'
              name='components'
              handleClick={props.handleClick}
              boxes = {[
                {
                  label: 'Verbal',
                  value: 'verbal'
                }, {
                  label: 'Somatic',
                  value: 'somatic'
                }, {
                  label: 'Material',
                  value: 'material'
                }, {
                  label: 'Focus',
                  value: 'focus'
                }, {
                  label: 'Divine Focus',
                  value: 'divinefocus'
                }, {
                  label: 'Material Costs',
                  value: 'materialcosts'
                },
              ]}
            />

            <CheckboxBank 
              title='Effects'
              name='effects'
              handleClick={props.handleClick}
              boxes = {[
                {
                  label: 'Water',
                  value: 'water'
                }, {
                  label: 'Sonic',
                  value: 'sonic'
                }, {
                  label: 'Shadow',
                  value: 'shadow'
                }, {
                  label: 'Poison',
                  value: 'poison'
                }, {
                  label: 'Pain',
                  value: 'pain'
                }, {
                  label: 'Mind Affecting',
                  value: 'mindaffecting'
                }, {
                  label: 'Light',
                  value: 'light'
                }, {
                  label: 'Lawful',
                  value: 'lawful'
                }, {
                  label: 'Language Dependent',
                  value: 'languagedependent'
                }, {
                  label: 'Good',
                  value: 'good'
                }, {
                  label: 'Force',
                  value: 'force'
                }, {
                  label: 'Fire',
                  value: 'fire'
                }, {
                  label: 'Fear',
                  value: 'fear'
                }, {
                  label: 'Evil',
                  value: 'evil'
                }, {
                  label: 'Emotion',
                  value: 'emotion'
                }, {
                  label: 'Electricity',
                  value: 'electricity'
                }, {
                  label: 'Earth',
                  value: 'earth'
                }, {
                  label: 'Disease',
                  value: 'disease'
                }, {
                  label: 'Death',
                  value: 'death'
                }, {
                  label: 'Darkness',
                  value: 'Darkness'
                }, {
                  label: 'Curse',
                  value: 'curse'
                }, {
                  label: 'Cold',
                  value: 'cold'
                }, {
                  label: 'Chaotic',
                  value: 'chaotic'
                }, {
                  label: 'Air',
                  value: 'air'
                }, {
                  label: 'Acid',
                  value: 'acid'
                },
              ]}
            />

            <CheckboxBank 
              title='Class'
              name='spelllevel'
              handleClick={props.handleClick}
              boxes = {[
                {
                  label: 'Wizard',
                  value: 'wiz'
                }, {
                  label: 'Sorcerer',
                  value: 'sor'
                }, {
                  label: 'Cleric',
                  value: 'cleric'
                }, {
                  label: 'Druid',
                  value: 'druid'
                }, {
                  label: 'Ranger',
                  value: 'ranger'
                }, {
                  label: 'Bard',
                  value: 'bard'
                }, {
                  label: 'Paladin',
                  value: 'paladin'
                }, {
                  label: 'Alchemist',
                  value: 'alchemist'
                }, {
                  label: 'Summoner',
                  value: 'summoner'
                }, {
                  label: 'Unchained Summoner',
                  value: 'summonerunchained'
                }, {
                  label: 'Inquisitor',
                  value: 'inquisitor'
                }, {
                  label: 'Oracle',
                  value: 'oracle'
                }, {
                  label: 'Antipaladin',
                  value: 'antipaladin'
                }, {
                  label: 'Magus',
                  value: 'magus'
                }, {
                  label: 'Bloodrager',
                  value: 'bloodrager'
                }, {
                  label: 'Shaman',
                  value: 'shaman'
                }, {
                  label: 'Psychic',
                  value: 'psychic'
                }, {
                  label: 'Medium',
                  value: 'medium'
                }, {
                  label: 'Mesmerist',
                  value: 'mesmerist'
                }, {
                  label: 'Occultist',
                  value: 'occultist'
                }, {
                  label: 'Spiritualist',
                  value: 'spiritualist'
                }, {
                  label: 'Skald',
                  value: 'skald'
                }, {
                  label: 'Investigator',
                  value: 'investigator'
                }, {
                  label: 'Hunter',
                  value: 'hunter'
                }, {
                  label: 'Witch',
                  value: 'witch'
                }
              ]}
            />
          </div>
        </div>
  );
}

export default SearchOptions;
