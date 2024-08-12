import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import EmployeesContainer from "../components/EmployeesContainer";

function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error("Error fetching employees:", error));
  }, []);

  const handleAddEmployees = (newEmployee) => {
    setEmployees((employees) => [...employees, newEmployee]);
  };

  return (
    <div className="Home">
      <h1 className="home-title">Project Web Development Tracker</h1>
      <hr />
      <Navbar />
      <hr />
      <EmployeesContainer 
        employees={employees} 
        onAddEmployees={handleAddEmployees} />
    </div>
  );
}

export default Home;
