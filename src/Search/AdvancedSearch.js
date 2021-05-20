import SearchBar from './SearchComponents/SearchBar'
import SearchOptions from './SearchComponents/SearchOptions'
import Button from '../Components/Button'
import { useState } from 'react'
import { Container, Box, Typography } from '@material-ui/core'

function AdvancedSearch(props) {

  const [include, setInclude] = useState([])
  const [exclude, setExclude] = useState([])
  const [search, setSearch] = useState('')

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const updateInclude = (key, value, name) => {
    console.log(key, value)
    const newInclude = include

    newInclude.push({ key, value, name })

    setInclude([...newInclude])
  }

  const updateExclude = (key, value, name) => {
    console.log(key, value)

    let newExclude = exclude
    newExclude.push({ key, value, name })

    setExclude([...newExclude])
  }

  // For checking data such as ray-spells, which is not always easily accessible
  const checkString = (spell, key, value) => {
    console.log(spell, key, value)
    let regex = new RegExp(`${value}`, 'i')

    if (spell[key] && spell[key].match(regex)) {
      return true
    }

    return false
  }

  const checkNumber = (spell, key, value) => {
    if (spell[key] && spell[key] != 'NULL' && spell[key] >= value) {
      return true
    }

    return false
  }

  const advancedSearch = () => {
    console.log('Submitting search')
    console.log(include)

    let filteredSpells = props.spells
    let newInclude = include

    // Check all conditions for including spells
    newInclude.forEach((item, i) => {

      filteredSpells = filteredSpells.filter(spell => {
        if (['class', 'components'].includes(item.name)) {
          if (checkNumber(spell, item.key, item.value)) {
            return spell
          }
      
        } else {
          if (checkString(spell, item.key, item.value)) {
            return spell
          }
        }
      })
    })

    // Check all conditions for excluding spells
    exclude.forEach((item, i) => {

      filteredSpells = filteredSpells.filter(spell => {
        if (['class', 'components'].includes(item.name)) {
          if (!checkNumber(spell, item.key, item.value)) {
            return spell
          }
      
        } else {
          if (!checkString(spell, item.key, item.value)) {
            return spell
          }
        }
      })
    })
    
    console.log(filteredSpells)
    props.setSpells(filteredSpells)
  }

  return (
    <Box pt={1} pb={1}>
        <Typography variant='h3'>Advanced Search</Typography>
        
        < SearchBar updateSearch={updateSearch} />

        <Box display='flex' flexDirection='row'>
          <Box p={2}>
            <Typography variant='h5'>Include </Typography>
            <SearchOptions handleClick={(e)=>{updateInclude(e.target.dataset['key'], e.target.dataset['value'], e.target.name)}} />
          </Box>

          <Box p={2}>
            <Typography variant='h5'>Exclude </Typography>
            <SearchOptions handleClick={(e)=>{updateExclude(e.target.dataset['key'], e.target.dataset['value'], e.target.name)}} />
          </Box>
        </Box>

        < Button handleClick={advancedSearch} text='Search' type='btn-full' />
    </Box>
  );
}

export default AdvancedSearch;
