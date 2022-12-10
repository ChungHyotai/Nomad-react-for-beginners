// import {Link} from "react-router-dom"

const MovieDetail = (props) => {
    return (
        <div>
            <h1>- Detail</h1>
            <h2>{props.title_long}</h2>
            <img src={props.large_cover_image} alt="" />
            <h3>{props.description_full}</h3>
        </div>
    );
}

// export default MovieList;
export {MovieDetail}