
const TextAPICall = (props) => {    
    return (
        <input type="text"
            value={props.value}
            placeholder={props.placeholder} 
            onChange={props.onChange} />
    );
}

export default TextAPICall;