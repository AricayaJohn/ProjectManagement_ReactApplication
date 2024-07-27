import React, {useEffect, useState} from "react";

function ToDoList({tasks}) {
    const [currentTasks, setCurrentTasks] = useState([])
   const [newTask, setNewTask] = useState("")

    useEffect(()=> {
        setCurrentTasks(tasks)
    }, [tasks])

function handleInputChange( event ){
    setNewTask(event.target.value);
}
function addTask(){
    if (newTask.trim() !== ""){
        setCurrentTasks(t => [...t, newTask]);
        setNewTask("");
    }
}
function deleteTask( index ){
    const updatedTasks = currentTasks.filter((_, i) => i !== index);
    setCurrentTasks(updatedTasks);
}
function moveTaskup( index ){
    if (index > 0) {
        const updatedTasks = [...currentTasks];
       [updatedTasks[index], updatedTasks[index -1]] = 
       [updatedTasks[index -1], updatedTasks[index]];
       setCurrentTasks(updatedTasks);
    }
}
function moveTaskDown( index ){
    if (index < tasks.length -1) {
        const updatedTasks = [...currentTasks];
       [updatedTasks[index], updatedTasks[index +1]] = 
       [updatedTasks[index +1], updatedTasks[index]];
       setCurrentTasks(updatedTasks);
    }
}

    return (
    <div className = "to-do-list"> 
        <h1> 
            Daily To-Do List
        </h1>
        <div>
            <input  type = "text"
                    placeholder = "Enter a Task..."
                    value = {newTask}
                    onChange = {handleInputChange} />
            <button 
                    className = "add-button"
                    onClick = {addTask}>
                ADD
            </button>
        </div>
        <ol>
            {currentTasks.map((task, index) => 
                <li key = {index}>
                    <span className = "text"> {task}</span>
                    <button className = "delete-button"
                            onClick = {() => deleteTask(index)}>
                        Delete
                    </button>
                    <button className = "move-button"
                            onClick = {() => moveTaskup(index)}>
                        Move up ☝🏽
                    </button>
                    <button className = "move-button"
                            onClick = {() => moveTaskDown(index)}>
                        Move down 👇🏽
                    </button>
                </li>
            )}
        </ol>
    </div>
    )
}

export default ToDoList