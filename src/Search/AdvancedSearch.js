import SearchBar from './SearchComponents/SearchBar'
import Checkbox from './SearchComponents/Checkbox'
import CheckboxBank from './SearchComponents/CheckboxBank'
import Button from '../Components/Button'
import { useState } from 'react';

function AdvancedSearch(props) {

  const [include, setInclude] = useState({})
  const [exclude, setExclude] = useState({})
  const [search, setSearch] = useState('')

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const updateInclude = (value) => {
    const newInclude = include

    if (newInclude[value]) {
      newInclude[value] = !newInclude[value]
    } else {
      newInclude[value] = true
    }

    setInclude({...newInclude})
  }

  const updateExclude = (value) => {
    const newExclude = exclude

    if (newExclude[value]) {
      newExclude[value] = !newExclude[value]
    } else {
      newExclude[value] = true
    }

    setExclude({...newExclude})
  }

  const submitSearch = () => {
    console.log('Submitting search')
    console.log(include, exclude, search)
  }

  return (
    <div>
        < SearchBar updateSearch={updateSearch} />
        < Button handleClick={submitSearch} text='Search' />

        {/* Spell Resistence, Saving Throw, Duration, Targets, Range, Casting Time, School, Domain, Source */}

        <div className='row'>
          <div className='checkbox-group'>
            <h3>Include: </h3>

            <CheckboxBank 
              title='Components'
              name='components'
              handleClick={(e)=>{updateInclude(e.target.value)}}
              boxes = {[
                {
                  label: 'Verbal',
                  value: 'verbal'
                }, {
                  label: 'Somantic',
                  value: 'somantic'
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
              handleClick={(e)=>{updateInclude(e.target.value)}}
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
              name='class'
              handleClick={(e)=>{updateInclude(e.target.value)}}
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

          <div className='checkbox-group'>
            <h3>Exclude: </h3>
            <CheckboxBank 
                title='Components'
                name='components'
                handleClick={(e)=>{updateExclude(e.target.value)}}
                boxes = {[
                  {
                    label: 'Verbal',
                    value: 'verbal'
                  }, {
                    label: 'Somantic',
                    value: 'somantic'
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
                handleClick={(e)=>{updateExclude(e.target.value)}}
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
                name='class'
                handleClick={(e)=>{updateExclude(e.target.value)}}
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
    </div>
  );
}

export default AdvancedSearch;
