
import React from "react";
import EmployeesCard from "./EmployeesCard";


function EmployeesContainer ({employees}) {
   return (
       <div className = "employees-container">
           {employees.map(employee => (
               <EmployeesCard key = {employee.id} employee = {employee} />
           ))}
       </div>
   )
}


export default EmployeesContainer;
//This maps over the list of employees and render Employee card for each one
