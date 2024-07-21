import React, {useState} from "react";
import EmployeesCard from "./EmployeesCard";


function EmployeesContainer ({employees}) {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const handleCardClick = (employee) => {
        setSelectedEmployee(employee)
    }

   return (
    <main> 
       <ul className = "employees-container">
           {employees.map(employee => (
               <EmployeesCard 
               key = {employee.id} 
               employee = {employee} 
               onClick ={handleCardClick}/>
           ))}
       </ul>
           {selectedEmployee && selectedEmployee.projects && (
            <div className="employee-projects">
                <h2> Projects for {selectedEmployee.name} </h2>
                {selectedEmployee.projects.map(project => (
                    <div key = {project.id} className="project">
                        <h3>{project.name}</h3>
                        <ul>
                            {project.tasks.map((task, index) => (
                                <li key = {index}> {task} </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
           )}
    </main>
   )
}


export default EmployeesContainer;
//This maps over the list of employees and render Employee card for each one
