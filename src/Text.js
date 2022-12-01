import { useEffect } from "react";

const TextAPICall = (props) => {
    useEffect(() => {
        console.log("TextAPICall Created!");        
        // 객체 소멸되는 시점에 호출
        return () => {            
            console.log("TextAPICall Destroyed!")
        }
    }, [])
    return (
        <input type="text"
            value={props.value}
            placeholder={props.placeholder} 
            onChange={props.onChange} />
    );
}

export default TextAPICall;