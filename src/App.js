import './App.css';
import axios from 'axios';
import Data from './Data'
import React from 'react';
import { useEffect, useState } from 'react'
import { Typography, CssBaseline, Box } from '@material-ui/core';

import Pagination from './Components/Pagination'
import SlimSearch from './Search/SlimSearch'
import AdvancedSearch from './Search/AdvancedSearch'
import Toggle from './Components/Toggle'

function App() {

  const [data, setData] = useState(null)    // Spell Data
  const [search, setSearch] = useState('')  // Search Term

  // Fetches data and sets it in state
  useEffect(() => {
    // axios.get('https://sheet.best/api/sheets/ee85efea-0617-4f18-86e5-8d77192ce78c')
    // .then(res => {
    //   console.log(res)
    //   setData(res.data)
    // })
    setData(Data)
  }, [])

  // Updates search term
  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  // Filters Spell Data by current search term and returns filtered array
  const filterSearch = () => {
    return data ? data.filter(spell => {
      return spell.name.includes(search)
    }) : []
  }

  return (
    <>
      < CssBaseline />

      <Box bgcolor="tomato" p={10} pt={4} boxShadow={2}>
          <Typography  variant='h1'>Pathfinder Spell Search</Typography>
          <Typography variant='h5'>A database of all first-party spells in Pathfinder</Typography>
      </Box>

      <div className="App">
        < Toggle 
          open={< AdvancedSearch updateSearch={updateSearch} setSpells={setData} spells={data} />}
          closed={< SlimSearch updateSearch={updateSearch} />}
          openText='Open Advanced Search' 
          closeText='Close Advanced Search'
        />
        
        < Pagination spells={filterSearch()} />
      </div>
    </>
  );
}

export default App;
