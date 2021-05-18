import Checkbox from './Checkbox'
import { Typography } from '@material-ui/core'

function CheckboxBank(props) {

    const bank = props.boxes.map(box => {
        return (
            <span className='radio-btn'>
                < input className='radio-btn-btn' name={props.name} htmlFor={box.label} data-key={box.key} data-value={box.value} type='radio' onClick={props.handleClick} />
                < label className='radio-btn-label' >{box.label}</label>
            </span>
        )
    })

    return (
        <div>
            <Typography variant='h6' gutterBottom={true}>{props.title}</Typography>
            {bank}
        </div>
    );
  }
  
  export default CheckboxBank;
  