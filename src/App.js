import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <header>
        <Link to="/grand-master-chess">
          <img src={require(`./images/header.jpeg`)} alt="Question" />
        </Link>
        <Link className="topnav-right" to="/about">
          About
        </Link>
      </header>
      <Routes>
        <Route path="/grand-master-chess" element={<Home />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
