import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EmploeeForm({ onProjectAdded }) {
    const [newProject, setNewProject] = useState("");
    const { id } = useParams(); 

    const handleInputChange = (e) => {
        setNewProject(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newProject.trim() === "") return;

        // First, fetch the existing employee data
        fetch(`http://localhost:3000/employees/${id}`)
            .then((response) => response.json())
            .then((data) => {
                // Append the new project
                const updatedProjects = [...data.projects, newProject];

                // Send PATCH request to update projects
                return fetch(`http://localhost:3000/employees/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ projects: updatedProjects }),
                });
            })
            .then((response) => response.json())
            .then((data) => {
                // Clear the input field and handle success
                setNewProject("");
                onProjectAdded();
                console.log("Project added successfully:", data);
            })
            .catch((error) => console.error("Error adding project:", error));
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
             type="text"
             value={newProject}
             onChange={handleInputChange}
             placeholder="Add New Task" />
            <button type="submit">
                Submit
            </button>
        </form>
        </>
    );
}

export default EmploeeForm;
