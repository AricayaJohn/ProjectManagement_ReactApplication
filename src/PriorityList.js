import React from "react";
import {useState} from "react"

function PriorityList() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState(["Go to the gym", "Eat more fruits", "Pick up kids"]);
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = ( e ) => {
        setTodo(e.target.value)
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if (todo.trim () !== ""){
            if (editIndex !== null){
                const updateTodos = todos.map((item, index) =>
                    index === editIndex ? todo : item);
                setTodos(updateTodos);
                setEditIndex(null);
            } else {
            setTodos([...todos, todo])
            }
            setTodo("")
        }};
    function deleteTodo ( index ){
        const deleteItem = todos.filter((_, i) => i !== index);
        setTodos(deleteItem);
    }

    function editTodo ( index ) {
        setTodo(todos[index]);
        setEditIndex(index);
    }

    return (
        <>
            <div className = "Priority">
                <h1> Priority List </h1>
                <form onSubmit = {handleSubmit}>
                    <input  type = "text" 
                            onChange = {handleChange}
                            value = {todo}
                            placeholder = "Enter Priority Task..." />
                    <button className = "add-button" type="submit" > 
                        {editIndex !== null ? "Update" : "Add"} 
                    </button>
                </form>
            </div>    
        <ul>
          {todos.map(( todo, index ) => {
           return (
            <li key = { index }>
                       { todo }
                <div className = "emoji">
                <button className = "Edit-button"
                        type = "button"
                        onClick = {() => editTodo(index)}> ✍🏽</button>
                <button className = "delete-button"
                        type = "button"
                        onClick = {() => deleteTodo(index)}> 🗑️</button>
                </div>
            </li>
               )
           })}
        </ul>
        </>
    )}

export default PriorityList;