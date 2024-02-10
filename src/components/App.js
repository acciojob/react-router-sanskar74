import React from "react";
import "./../styles/App.css";
import Home from "./Home";
import About from "./About";
import { Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
