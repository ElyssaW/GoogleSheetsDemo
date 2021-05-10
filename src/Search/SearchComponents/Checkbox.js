function Checkbox(props) {
    return (
        <>
            < input name={props.name} htmlFor={props.label} value={props.value} type='checkbox' onClick={props.handleClick} />
            < label >{props.label}</label>
        </>
    );
  }
  
  export default Checkbox;
  