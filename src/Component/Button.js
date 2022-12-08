import {Link} from "react-router-dom"

const MoveButton = (props) => {
    return (
        <button onClick={props.onClick} action={props.action}>[{props.name}]</button>
    );
}

function HomeBtn() {
    return (
        <Link to="/"><button>Home</button></Link>
    )
}

// export default MovieList;
export {MoveButton, HomeBtn}