import React from "react";
import "./App.css";


function App() {
  return (
    <form>
      <div className="main-container">
        <div className="container">
          <div className="inner-container">
            <div className="heading">Create Account</div>
            <div className="item">
              <label for="">Your Name:</label>
              <br />
              <input type="text" id="name" className="form-control"></input>
            </div>
            <div className="item">
              <label for="mobile_number">Mobile Number:</label>
              <br />
              <input
                type="number"
                id="mobile_number"
                className="form-control"
              ></input>
            </div>
            <div className="item">
              <label for="email">Email:</label>
              <br />
              <input type="email" id="email" className="form-control"></input>
            </div>
            <div className="item">
              <label for="password">Password:</label>
              <br />
              <input
                type="password"
                id="password"
                className="form-control"
              ></input>
            </div>
            <div className="item">
              <button id="button">Continue</button>
            </div>
            <div className="signin">
              Already have an account?&nbsp;
              <a href="">Sign in </a> 
            </div>
          </div>
        </div>
      </div>
      
    </form>
  );
}

export default App;
