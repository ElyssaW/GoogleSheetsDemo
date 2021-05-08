import { useState } from "react";

function Toggle(props) {

    const [expanded, setExpanded] = useState(false)

    const display = expanded ? (
        <div>
            {props.open}
        </div>
    ) : (
        <div>
            {props.closed}
        </div>
    )

    const toggle = () => {
        setExpanded(!expanded)
    }

    return (
        <div onClick={toggle}>
            {display}
        </div>
    )
}

export default Toggle;
