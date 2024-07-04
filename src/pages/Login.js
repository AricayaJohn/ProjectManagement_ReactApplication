import React from "react";
import NavBar from "../components/NavBar";

function Login () {
    return (
        <>
        <header>
            <NavBar />
        </header>
        <h1>
            Login
        </h1>
        <form>
            <div>
                <label 
                      for = "username" >
                    Username :
                </label>
                <input id = "username"
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
                <input id = "password" 
                        type = "password"
                        name = "password"
                        placeholder = "Password">
                </input>
            </div>
            <button type = "submit">
                Submit
            </button>
        </form>
        </>
    )
}

export default Login;