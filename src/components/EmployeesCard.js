import React from "react";

function EmployeesCard({ employee }) {

   return (
       <div
        className = "employee-card" >
           <img src = {employee.image} alt = {employee.name} className = "employee-image" />
           <h2 className = "employee-name" > {employee.name} </h2>
           <p className = "employee-job" > Job Title: {employee.jobTitle} </p>
           <p className = "employee-work-status"> {employee.workStatus} </p>
       </div>
   )
}


export default EmployeesCard;

