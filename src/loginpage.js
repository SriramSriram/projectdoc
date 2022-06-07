import React from "react";
import "./login.css"

function login(){
    return(
        <form>
            <div className="form">
                <input type="email" className="mail" >Email</input>
            </div>
            <div className="form">
                <input type="password" className="password">password</input>
            </div>

        </form>

    );
}

export default login;