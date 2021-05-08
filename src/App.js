import './App.css';
import axios from 'axios';
import Data from './Data'
import { useEffect, useState } from 'react';
import SpellList from './Components/SpellList'

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    // axios.get('https://sheet.best/api/sheets/ee85efea-0617-4f18-86e5-8d77192ce78c')
    // .then(res => {
    //   console.log(res)
    //   setData(res.data)
    // })
    setData(Data)
  }, [])


  return (
    <div className="App">
      < SpellList spells={data} />
    </div>
  );
}

export default App;
