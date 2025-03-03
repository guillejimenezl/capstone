
const Itemmenu = props => {
    return (
        <div className="contenedor">
            <img src={props.imgSrc} alt="specials" id="food1"/>
            <div className="titulos">
                <span className="title">{props.title}</span>
                <span className="precio">{props.precio}</span>
                </div>
            <div className="description">{props.description}</div>
            <div className="order"><button>Order +1</button></div>
        </div>
    );
}

export default Itemmenu;
