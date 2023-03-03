function Asset(props) {
    return (<img style={{
    width: '200px',
    marginTop: '100px',
    marginLeft: '20px'}}
 src={props.asset}></img>);
}



export default Asset;