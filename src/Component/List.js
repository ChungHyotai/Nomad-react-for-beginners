import {Link} from "react-router-dom"

const MovieList = (props) => {
    return (
        <div>
            <img src={props.coverImg} alt=''/>
            <h2>
                <Link to={`/movie/${props.id}`}>{props.title}, id : {props.id}</Link>
                {/* https://yts.mx/api/v2/movie_details.json?movie_id=46035 */}
            </h2>
            <p>{props.summary.length > 235 ? `${props.summary.slice(0, 235)}...`: props.summary}</p>
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