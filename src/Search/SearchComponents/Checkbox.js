function Checkbox(props) {
    return (
        <>
            < input name={props.name} htmlFor={props.label} value={props.value} type='checkbox' />
            < label >{props.label}</label>
        </>
    );
  }
  
  export default Checkbox;
  