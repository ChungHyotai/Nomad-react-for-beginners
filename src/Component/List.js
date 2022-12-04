import {Link} from "react-router-dom"

const MovieList = (props) => {
    return (
        <div>
            <img src={props.coverImg} />
            <h2>
                <Link to={`/movie/${props.id}`}>{props.title}, id : {props.id}</Link>
            </h2>
            <p>{props.summary}</p>
            <ul>
                {props.genres.map((item, index)=> (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

// export default MovieList;
export {MovieList}