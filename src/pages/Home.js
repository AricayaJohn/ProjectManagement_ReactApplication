import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import EmployeesContainer from "../components/EmployeesContainer";


function Home() {
   const [employees, setEmployees] = useState([]);


   useEffect(() => {
       fetch('http://localhost:3000/employees')
           .then(response => response.json())
           .then(data => {
               console.log(data)
               setEmployees(data);
           })
   }, []);


   return (
       <>
           <hr />
           <div className="Home">
               <h1>Project Web Development Tracker</h1>
               <Navbar />
           <hr />   
            <EmployeesContainer employees={employees} />
           </div>
       </>
   );
}


export default Home;