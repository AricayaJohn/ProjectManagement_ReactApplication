import React from "react";
import Navbar from "../components/Navbar";
import EmployeesContainer from "../components/EmployeesContainer";
import { useEmployees } from "../pages/EmployeeContext"; 

function Home() {
  const { employees } = useEmployees(); 

  return (
    <div className="Home">
      <h1 className="home-title">Project Web Development Tracker</h1>
      <hr />
      <Navbar />
      <hr />
      <EmployeesContainer 
        employees={employees} 
      />
    </div>
  );
}

export default Home;
