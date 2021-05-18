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
                  key: 'savingthrow',
                  value: 'None'
                }, {
                  label: 'Will',
                  key: 'savingthrow',
                  value: 'will'
                }, {
                  label: 'Reflex',
                  key: 'savingthrow',
                  value: 'Reflex'
                }, {
                  label: 'Fortitude',
                  key: 'savingthrow',
                  value: 'Fortitude'
                }, {
                  label: 'Other',
                  key: 'savingthrow',
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
                  label: 'Instantaneous',
                  key: 'duration',
                  value: 'instantaneous'
                }, {
                  label: 'Permanent',
                  key: 'duration',
                  value: 'permanent'
                }, {
                  label: 'Concentration',
                  key: 'duration',
                  value: 'concentration'
                }, {
                  label: '1 round/level',
                  key: 'duration',
                  value: 'round'
                }, {
                  label: '1 minute/level',
                  key: 'duration',
                  value: '1 minute'
                }, {
                  label: '10 minutes/level',
                  key: 'duration',
                  value: '10 minutes'
                }, {
                  label: '1 hour/level',
                  key: 'duration',
                  value: 'hour'
                }, {
                  label: '1 day/level',
                  key: 'duration',
                  value: 'day'
                }, {
                  label: 'Other',
                  key: 'duration',
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
                  key: 'area',
                  value: 'radius'
                }, {
                  label: 'Cone',
                  key: 'area',
                  value: 'cone'
                }, {
                  label: 'Line',
                  key: 'area',
                  value: 'line'
                }, {
                  label: 'Ray',
                  key: 'effect',
                  value: 'ray'
                }, {
                  label: 'Melee Touch Attack',
                  key: 'description',
                  value: 'melee touch attack'
                }, {
                  label: 'Ranged Touch Attack',
                  key: 'description',
                  value: 'ranged'
                }, {
                  label: 'Other',
                  key: 'area',
                  value: ''
                }, {
                  label: 'None',
                  key: 'area',
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
                  key: 'range',
                  value: 'long'
                }, {
                  label: 'Medium',
                  key: 'range',
                  value: 'medium'
                }, {
                  label: 'Close',
                  key: 'range',
                  value: 'close'
                }, {
                  label: 'Touch',
                  key: 'range',
                  value: 'touch'
                }, {
                  label: 'Personal',
                  key: 'range',
                  value: 'Personal'
                }, {
                  label: 'Other',
                  key: 'range',
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
                  key: 'school',
                  value: 'abjuration'
                }, {
                  label: 'Conjuration',
                  key: 'school',
                  value: 'conjuration'
                },, {
                  label: 'Divination',
                  key: 'school',
                  value: 'divination'
                }, {
                  label: 'Evocation',
                  key: 'school',
                  value: 'evocation'
                }, {
                  label: 'Enchantment',
                  key: 'school',
                  value: 'enchantment'
                }, {
                  label: 'Illusion',
                  key: 'school',
                  value: 'illusion'
                }, {
                  label: 'Necromancy',
                  key: 'school',
                  value: 'necromancy'
                }, {
                  label: 'Transmutation',
                  key: 'school',
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
                  key: 'verbal',
                  value: '1'
                }, {
                  label: 'Somatic',
                  key: 'somantic',
                  value: '1'
                }, {
                  label: 'Material',
                  key: 'material',
                  value: '1'
                }, {
                  label: 'Focus',
                  key: 'focus',
                  value: '1'
                }, {
                  label: 'Divine Focus',
                  key: 'divinefocus',
                  value: '1'
                }, {
                  label: 'Material Costs',
                  key: 'materialcosts',
                  value: '1'
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
                  key: 'water',
                  value: '1'
                }, {
                  label: 'Sonic',
                  key: 'sonic',
                  value: '1'
                }, {
                  label: 'Shadow',
                  key: 'shadow',
                  value: '1'
                }, {
                  label: 'Poison',
                  key: 'poison',
                  value: '1'
                }, {
                  label: 'Pain',
                  key: 'pain',
                  value: '1'
                }, {
                  label: 'Mind Affecting',
                  key: 'mindaffecting',
                  value: '1'
                }, {
                  label: 'Light',
                  key: 'light',
                  value: '1'
                }, {
                  label: 'Lawful',
                  key: 'lawful',
                  value: '1'
                }, {
                  label: 'Language Dependent',
                  key: 'languagedependent',
                  value: '1'
                }, {
                  label: 'Good',
                  key: 'good',
                  value: '1'
                }, {
                  label: 'Force',
                  key: 'force',
                  value: '1'
                }, {
                  label: 'Fire',
                  key: 'fire',
                  value: '1'
                }, {
                  label: 'Fear',
                  key: 'fear',
                  value: '1'
                }, {
                  label: 'Evil',
                  key: 'evil',
                  value: '1'
                }, {
                  label: 'Emotion',
                  key: 'emotion',
                  value: '1'
                }, {
                  label: 'Electricity',
                  key: 'electricity',
                  value: '1'
                }, {
                  label: 'Earth',
                  key: 'earth',
                  value: '1'
                }, {
                  label: 'Disease',
                  key: 'disease',
                  value: '1'
                }, {
                  label: 'Death',
                  key: 'death',
                  value: '1'
                }, {
                  label: 'Darkness',
                  key: 'Darkness',
                  value: '1'
                }, {
                  label: 'Curse',
                  key: 'curse',
                  value: '1'
                }, {
                  label: 'Cold',
                  key: 'cold',
                  value: '1'
                }, {
                  label: 'Chaotic',
                  key: 'chaotic',
                  value: '1'
                }, {
                  label: 'Air',
                  key: 'air',
                  value: '1'
                }, {
                  label: 'Acid',
                  key: 'acid',
                  value: '1'
                },
              ]}
            />

            <CheckboxBank 
              title='Class'
              name='class'
              handleClick={props.handleClick}
              boxes = {[
                {
                  label: 'Wizard',
                  key: 'wiz',
                  value: '0'
                }, {
                  label: 'Sorcerer',
                  key: 'sor',
                  value: '0'
                }, {
                  label: 'Cleric',
                  key: 'cleric',
                  value: '0'
                }, {
                  label: 'Druid',
                  key: 'druid',
                  value: '0'
                }, {
                  label: 'Ranger',
                  key: 'ranger',
                  value: '0'
                }, {
                  label: 'Bard',
                  key: 'bard',
                  value: '0'
                }, {
                  label: 'Paladin',
                  key: 'paladin',
                  value: '0'
                }, {
                  label: 'Alchemist',
                  key: 'alchemist',
                  value: '0'
                }, {
                  label: 'Summoner',
                  key: 'summoner',
                  value: '0'
                }, {
                  label: 'Unchained Summoner',
                  key: 'summonerunchained',
                  value: '0'
                }, {
                  label: 'Inquisitor',
                  key: 'inquisitor',
                  value: '0'
                }, {
                  label: 'Oracle',
                  key: 'oracle',
                  value: '0'
                }, {
                  label: 'Antipaladin',
                  key: 'antipaladin',
                  value: '0'
                }, {
                  label: 'Magus',
                  key: 'magus',
                  value: '0'
                }, {
                  label: 'Bloodrager',
                  key: 'bloodrager',
                  value: '0'
                }, {
                  label: 'Shaman',
                  key: 'shaman',
                  value: '0'
                }, {
                  label: 'Psychic',
                  key: 'psychic',
                  value: '0'
                }, {
                  label: 'Medium',
                  key: 'medium',
                  value: '0'
                }, {
                  label: 'Mesmerist',
                  key: 'mesmerist',
                  value: '0'
                }, {
                  label: 'Occultist',
                  key: 'occultist',
                  value: '0'
                }, {
                  label: 'Spiritualist',
                  key: 'spiritualist',
                  value: '0'
                }, {
                  label: 'Skald',
                  key: 'skald',
                  value: '0'
                }, {
                  label: 'Investigator',
                  key: 'investigator',
                  value: '0'
                }, {
                  label: 'Hunter',
                  key: 'hunter',
                  value: '0'
                }, {
                  label: 'Witch',
                  key: 'witch',
                  value: '0'
                }
              ]}
            />
          </div>
        </div>
  );
}

export default SearchOptions;
