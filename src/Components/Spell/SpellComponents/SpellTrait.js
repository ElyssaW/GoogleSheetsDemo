function SpellTrait(props) {

    const name = props.name
    const trait = props.trait ? props.trait : props.displayIfEmpty

    const display = name ? (
        <span>
            {name}: {trait}
        </span>
    ) : (
        <span>
            {trait}
        </span>
    ) 


    return (
      <span>
          {display}
      </span>
    );
  }
  
  export default SpellTrait;
  