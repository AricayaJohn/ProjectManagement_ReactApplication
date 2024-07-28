import React from "react";
import Navbar from "../components/Navbar";

function Login () {
    return (
        <div className = "Login-Page">
        <header>
            <Navbar />
        </header>
        <hr />
        <h1 className = "Login">
            Login
        </h1>
        <form className = "Login-Form">
            <div>
                <label for = "username" >
                    Username :
                </label>
                <input 
                        id = "username"
                        type = "text"
                        name = "username"
                        placeholder = "Username">
                </input>
            </div>
            <br />
            <div>
                <label for = "password">
                    Password :
                </label>
                <input 
                        id = "password" 
                        type = "password"
                        name = "password"
                        placeholder = "Password">
                </input>
            </div>
            <button type = "submit">
                Submit
            </button>
        </form>
        </div>
    )
}

export default Login;