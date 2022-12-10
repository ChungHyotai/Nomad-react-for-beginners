import {
    // BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom"
import Home from "../routes/Home"
import Detail from "../routes/Detail"

function MovieRoute() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Detail />} />
        </Routes>
    )
}

// export default MovieList;
export {MovieRoute}