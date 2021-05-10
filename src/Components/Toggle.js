import { useState } from "react";
import Button from './Button'

function Toggle(props) {

    const [expanded, setExpanded] = useState(false)

    const toggle = () => {
        setExpanded(!expanded)
    }

    const display = expanded ? (
        <div>
            {props.open}
            < Button text='Close' handleClick={toggle} />
        </div>
    ) : (
        <div>
            {props.closed}
            < Button text='Open' handleClick={toggle} />
        </div>
    )

    return (
        <div >
            {display}
        </div>
    )
}

export default Toggle;
