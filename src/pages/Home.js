import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import EmployeesContainer from "../components/EmployeesContainer";
import AddEmployee from "./AddEmployee";

function Home() {
const [employees, setEmployees] = useState([]);

useEffect(() => {
    fetch('http://localhost:3000/employees')
    .then(response => response.json())
    .then(data => {
        setEmployees(data);
    })
}, []);


const handleAddEmployees = (newEmployee) => {
    setEmployees((employees) => [...employees, newEmployee])
}

return (
    <>
           <div className="Home">
            <h1 className="home-title">Project Web Development Tracker</h1>
            <hr />
            <Navbar />
            <hr />
            <AddEmployee onAddEmployees={handleAddEmployees} />
        <hr />   
            <EmployeesContainer 
                employees={employees} 
                onAddEmployees = {handleAddEmployees}/>
           </div>
       </>
   );
}


export default Home;