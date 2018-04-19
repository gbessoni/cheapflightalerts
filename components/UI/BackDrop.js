const BackDrop = (props) => (
    props.show ? <div className="backdrop" onClick={props.clicked}></div> : null
);

export default BackDrop;