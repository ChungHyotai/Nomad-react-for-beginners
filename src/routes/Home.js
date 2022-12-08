import {useState, useEffect} from "react";
import {MovieList} from "../Component/List";
import {PrevButton} from "../Component/Button";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
  
    // async, await 방식
    useEffect(() => {
        const getMovies = async() => {
            const apiUrl = `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year&page=${page}`;
            const response = await fetch(apiUrl, {method : "GET"});
            const json = await response.json();

            setLoading(false);
            setMovies(json.data.movies.map((item, index) => (
                <MovieList key={index} 
                    id={item.id} 
                    coverImg={item.medium_cover_image} 
                    title={item.title} 
                    year={item.year} 
                    url={item.url} 
                    summary={item.summary} 
                    genres={item.genres} />
            )))
        };
        getMovies();
    }, [page]);

    const onPageMove = (e) => {
    setLoading(true)
    setPage((current) => {
            if(e.target.attributes.action.value === 'P')
                return current-=1
            else
                return current+=1
        })
    }

return (
    <div>
        <h1>The Movies! {loading ? "" : `(${movies.length}) -> (${page})`}</h1>

        <PrevButton onClick={onPageMove} action='P' name='Prev' />
        <PrevButton onClick={onPageMove} action='N' name='Next' />      

        {loading ? (
            <strong>Loading...</strong>
        ) : (
            movies
        )}

        <PrevButton onClick={onPageMove} action='P' name='Prev' />
        <PrevButton onClick={onPageMove} action='N' name='Next' />      
    </div>
    )
}

export default Home