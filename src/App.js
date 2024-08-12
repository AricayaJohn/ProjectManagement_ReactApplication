import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AddEmployee from "./pages/AddEmployee";  // Fixed import path


function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/add-employee" element={<AddEmployee />} /> 
        </Routes>
    );
}

export default App;
