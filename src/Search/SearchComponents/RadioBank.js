import Radio from './Radio'

function RadioBank(props) {

    const bank = props.boxes.map(box => {
        return (
            <>
                < input name={props.name} htmlFor={box.label} value={box.value} type='radio' onClick={props.handleClick} />
                < label >{box.label}</label>
            </>
        )
    })

    return (
        <div>
            <h4>{props.title}</h4>
            {bank}
        </div>
    );
  }
  
  export default RadioBank;
  