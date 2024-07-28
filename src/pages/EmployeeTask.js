import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import EmployeeForm from "./EmployeeForm";

function EmploeeTask() {
    const [employee, setEmployee] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/employees/${id}`)
            .then((r) => r.json())
            .then((data) => setEmployee(data))
            .catch((error) => console.error("Error fetching data", error));
    }, [id]);

    const handleProjectUpdate = useCallback(() => {
        fetch(`http://localhost:3000/employees/${id}`)
            .then((r) => r.json())
            .then((data) => setEmployee(data))
            .catch((error) => console.error("Error fetching data", error));
    }, [id]);

    useEffect(() => {
        handleProjectUpdate();
    }, [handleProjectUpdate]);

    if (!employee) {
        return <h1>Loading...</h1>;
    }

    const { name, jobTitle, workStatus, projects } = employee;

    return (
        <>
            <header className="task-header">
                <Navbar />
            </header>
            <hr />
            <article className="article">
                <h1>Tasks for Employee: {name}</h1>
                <h3>{jobTitle}</h3>
                <h3>{workStatus}</h3>
                <h3>
                    Projects: 
                </h3>
                <ul>
                    {Array.isArray(projects) && projects.length > 0 ? (
                        projects.map((project, index) => (
                            <li key={index}>{project}</li>
                        ))
                    ) : (
                        <li>No projects</li>
                    )}
                </ul>
                <br />
                <EmployeeForm onProjectAdded={handleProjectUpdate} />
            </article>
        </>
    );
}

export default EmploeeTask;
