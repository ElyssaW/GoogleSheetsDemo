import { useState } from "react";
import Button from './Button'
import { Box } from '@material-ui/core'

function Toggle(props) {

    const [expanded, setExpanded] = useState(false)

    const toggle = () => {
        setExpanded(!expanded)
    }

    const display = expanded ? (
        <div>
            {props.open}
            < Button text={props.closeText} handleClick={toggle} />
        </div>
    ) : (
        <div>
            {props.closed}
            < Button text={props.openText} handleClick={toggle} />
        </div>
    )

    return (
        <Box pb={1} pt={1} >
            {display}
        </Box>
    )
}

export default Toggle;
