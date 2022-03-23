import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Details from "./pages/Details";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/details/:showId" element={<Details />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
