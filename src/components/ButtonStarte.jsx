const ButtonStarted = ({text, onClick}) => {

    return (
        <button className="cta-button" onClick={onClick}>
          {text}
        </button>
    )
}

export default ButtonStarted