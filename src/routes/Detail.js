import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import {HomeBtn} from "../Component/Button"

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movieInfo, setMovieInfo] = useState([]);
    const params = useParams();
    
    // async, await 방식
    useEffect(() => {
        const getMovieDetail = async() => {
            // const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movie_id}`, {method : "GET"});
            const apiUrl = `https://yts.mx/api/v2/movie_details.json?movie_id=${params.id}`;
            // const response = await fetch(apiUrl, {method : "GET"});
            // const json = await response.json();
            const json = await (await fetch(apiUrl, {method : "GET"})).json();
            
            setLoading(false);
            setMovieInfo(json.data.movie);        
        };
             
        getMovieDetail();
    }, [params.id]);
    
    return (
        <div>            
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <div>
                    <h1>- Detail</h1>
                    <h2>{movieInfo.title_long}</h2>
                    <img src={movieInfo.large_cover_image} alt="" />
                    <h3>{movieInfo.description_full}</h3>
                </div>
            )}
            
            <HomeBtn />            
        </div>
        
    )
}

export default Detail