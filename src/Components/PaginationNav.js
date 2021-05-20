import Button from './Button'

function PaginationNav(props) {

    let breadcrumbs = []
    for (let i = 1; i <= props.pageCount; i++) {
        let className = (props.index / props.resultsPerPage) + 1 === i ? 'breadcrumb-active' : 'breadcrumb'
        breadcrumbs.push(
            < Button text={i} type={className} handleClick={()=>{props.setPage(i-1)}} />
        )
    }

    return (
      <>
        < Button text="Previous" type='breadcrumb breadcrumb-back breadcrumb-end' handleClick={props.backPage} />

        {breadcrumbs}

        < Button text="Next" type='breadcrumb breadcrumb-next breadcrumb-end' handleClick={props.nextPage} />
      </>
    );
  }
  
  export default PaginationNav;
  