function SpellTrait(props) {

    const display = props.name ? (
        <span>
            {props.name}: {props.trait}
        </span>
    ) : (
        <span>
            {props.trait}
        </span>
    ) 


    return (
      <span>
          {display}
      </span>
    );
  }
  
  export default SpellTrait;
  