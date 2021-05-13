import SearchBar from './SearchComponents/SearchBar'
import SearchOptions from './SearchComponents/SearchOptions'
import Button from '../Components/Button'
import { useState } from 'react';

function AdvancedSearch(props) {

  const [include, setInclude] = useState({})
  const [exclude, setExclude] = useState({})
  const [search, setSearch] = useState('')

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const updateInclude = (key, value) => {
    console.log(key, value)
    const newInclude = include

    if (newInclude[key] && newInclude[key].includes(value)) {
      newInclude[key] = newInclude[key].filter(item => {
        return item != value
      })

    } else if (newInclude[key]) {
      newInclude[key].push(value)

    } else {
      newInclude[key] = [value]
    }

    setInclude({...newInclude})
  }

  const updateExclude = (key, value) => {
    const newExclude = exclude

    if (newExclude[value]) {
      delete newExclude[value]
    } else {
      newExclude[value] = true
    }

    setExclude({...newExclude})
  }

  const checkOneColumn = (spell, include, key) => {
    let regex = new RegExp(`(${include[key].join('|')})`, 'i')

    // Return false if the regex can't find a match
    if (!spell[key] || !spell[key].match(regex)) {
      return false
    }

    return true
  }

  // For checking data such as effect or components, which is stored across multiple columns
  const checkMultiColumn = (spell, include, key) => {

    for (let i = 0; i < include[key].length; i++) {
      if (!spell[include[key]]) {
        return false
      }
    }

    return true
  }

  // For checking data such as ray-spells, which is not always easily accessible
  const checkSpecial = (spell, phrase, column) => {
    let regex = new RegExp(`${phrase}`, 'i')
    if (!spell[column].match(regex)) {
      return false
    }
    return true
  }

  const advancedSearch = () => {
    console.log('Submitting search')
    console.log(include)

    const filteredSpells = props.spells.filter(spell => {

      // Check all conditions for including spells
      for (const key in include) {

        if (['components', 'effects'].includes(key)) {
          return checkMultiColumn(spell, include, key)
          
        } else if (key === 'area' && include[key][0] == 'ray') {
          return checkSpecial(spell, 'effect', 'ray')

        } else if (key === 'area' && ['ranged touch attack', 'melee touch attack'].includes(include[key][0])) {
          return checkSpecial(spell, include[key][0], 'description')

        } else {
          return checkOneColumn(spell, include, key)
        }
      }

      // Check all conditions for excluding spells
      for (const key in exclude) {

        // Create regex that will match the keywords we're looking for
        let regex = new RegExp(`(${include[key].join('|')})`, 'i')

        // Return false if the spell contains any of the keywords we want to exclude
        if (spell[key] && spell[key].match(regex)) {
          return false
        }
      }

      // If the spell has any of the inclusive keywords, and none of the exclusive ones, then return true
      return true
    })

    console.log(filteredSpells)
    props.setSpells(filteredSpells)
  }

  return (
    <div>
        < SearchBar updateSearch={updateSearch} />
        < Button handleClick={advancedSearch} text='Search' />

        <div className='row'>
          <div>
            <h3>Include: </h3>
            <SearchOptions handleClick={(e)=>{updateInclude(e.target.name, e.target.value)}} />
          </div>

          <div>
            <h3>Exclude: </h3>
            <SearchOptions handleClick={(e)=>{updateExclude(e.target.value)}} />
          </div>
        </div>
    </div>
  );
}

export default AdvancedSearch;
