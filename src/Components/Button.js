function Button(props) {

  return (
    < button className={props.type} onClick={props.handleClick}>
        {props.text}
    </button>
  );
}

export default Button;
