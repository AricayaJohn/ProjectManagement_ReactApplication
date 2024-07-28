import React, { useState } from "react";

function AddEmployee({ onAddEmployees }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [workStatus, setWorkStatus] = useState("");
  const [projects, setProjects] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const projectsArray = projects.split(",").map(project => project.trim());

    fetch('http://localhost:3000/employees', {
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({ name, image, jobTitle, workStatus, projects: projectsArray }),
    })
    .then((r) => r.json())
    .then((data) => {
      onAddEmployees(data);
      setName("");
      setImage("");
      setJobTitle("");
      setWorkStatus("");
      setProjects(""); 
    })
    .catch((error) => console.error("Error adding employee:", error));
  };

  return (
    <div className="new-employee-Form">
      <h2 className = "NewEmployee-header">Add New Employee</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Employee Name" 
               value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Image URL" 
               value={image} onChange={(e) => setImage(e.target.value)} />
        <input type="text" placeholder="Employee Job Title" 
               value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        <input type="text" placeholder="Work Status" 
               value={workStatus} onChange={(e) => setWorkStatus(e.target.value)} />
        <input type="text" placeholder="Projects" 
               value={projects} onChange={(e) => setProjects(e.target.value)} />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;
