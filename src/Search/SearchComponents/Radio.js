function Radio(props) {
    return (
        <>
            < input name={props.name} htmlFor={props.label} value={props.value} type='radio' onClick={props.handleClick} />
            < label >{props.label}</label>
        </>
    );
  }
  
  export default Radio;
  