import './App.css';
import axios from 'axios';
import Data from './Data'
import React from 'react';
import { useEffect, useState } from 'react'
import { Box, CssBaseline } from '@material-ui/core';

import SpellList from './Components/Spell/SpellList'
import SlimSearch from './Search/SlimSearch'

function App() {

  const [data, setData] = useState(null)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)
  const [pageLimit, setPageLimit] = useState(10)

  useEffect(() => {
    // axios.get('https://sheet.best/api/sheets/ee85efea-0617-4f18-86e5-8d77192ce78c')
    // .then(res => {
    //   console.log(res)
    //   setData(res.data)
    // })
    setData(Data)
  }, [])

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }

  const filterSearch = () => {
    if (data) {
      if (data[page + pageLimit]) {
        return data.slice(page, page + pageLimit).filter(spell => {
          return spell.description.includes(search) || spell.name.includes(search)
        })
      } else {
        return data.slice(page).filter(spell => {
          return spell.description.includes(search) || spell.name.includes(search)
        })
      }
    } else {
      return []
    }
  }

  return (
    <>
      < CssBaseline />
      <Box className="App">
        < SlimSearch updateSearch={updateSearch} />
        < SpellList spells={filterSearch()} />
      </Box>
    </>
  );
}

export default App;
