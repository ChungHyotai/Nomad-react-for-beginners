import Protypes from "prop-types";
// import styles from "./Button.module.css"

const Button = (props) => {    
    return (
        <button className={props.color}
            onClick={props.onClick}
        >{props.text}</button>
    );
}

Button.proTypes = {
    text: Protypes.string,
}

export default Button;