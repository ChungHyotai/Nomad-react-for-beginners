// import {useState, useEffect} from "react";
import {
  BrowserRouter as Router,
  // Routes,
  // Route,
} from "react-router-dom"
// import Home from "./routes/Home"
// import Detail from "./routes/Detail"
import {MovieRoute} from "./routes/Route"

function App() {
  return (
    <Router>
      <MovieRoute />
    </Router>
  )
}

export default App