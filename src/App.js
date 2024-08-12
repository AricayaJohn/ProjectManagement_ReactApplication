import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AddEmployee from "./pages/AddEmployee";
import { EmployeeProvider } from "./pages/EmployeeContext"; 

function App() {
    return (
        <EmployeeProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/add-employee" element={<AddEmployee />} />
            </Routes>
        </EmployeeProvider>
    );
}

export default App;
