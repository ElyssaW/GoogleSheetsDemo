import { useState } from "react";
import SpellList from './Spell/SpellList'
import PaginationNav from './PaginationNav'

function Pagination(props) {

    const [index, setIndex] = useState(0)
    const [resultsPerPage, setResultsPerPage] = useState(30)

    const pageCount = Math.ceil(props.spells.length / resultsPerPage)

    const list = props.spells && props.spells[index + resultsPerPage] ? 
            props.spells.slice(index, index + resultsPerPage)
        :
            props.spells.slice(index)

    const backPage = () => {
        console.log('Clicked last page')
        if (index > 0) {
            setIndex(index - resultsPerPage)
        }
    }

    const nextPage = () => {
        console.log('Clicked next page')
        if (index < props.spells.length - resultsPerPage) {
            setIndex(index + resultsPerPage)
        }
    }

    const setPage = (newIndex) => {
        console.log('Clicked set page', newIndex)
        if (newIndex >= 0 && index < props.spells.length - resultsPerPage) {
            setIndex(newIndex * resultsPerPage)
        }
    }

    console.log(index, resultsPerPage, 'hello')
    console.log(props.spells.slice(index, index + resultsPerPage))

    return (
      <>
        < PaginationNav backPage={backPage} nextPage={nextPage} setPage={setPage} pageCount={pageCount} index={index} resultsPerPage={resultsPerPage} />
        < SpellList spells={list} />
        < PaginationNav backPage={backPage} nextPage={nextPage} setPage={setPage} pageCount={pageCount} index={index} resultsPerPage={resultsPerPage} />
      </>
    );
  }
  
  export default Pagination;
  