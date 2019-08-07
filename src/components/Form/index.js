import React from "react";
import "./style.css";


function Form() {
  return (
    <div class="container">
    <h3>Sign Up to our Services:</h3>
    <form>
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email"  placeholder="Enter your email"></input>
        <label for="password">Password</label>
        <input type="email" class="form-control" id="password"  placeholder="Enter your password"></input>
        <label for="confirmPassword">Confirm Password</label>
        <input type="email" class="form-control" id="confirmPassword"  placeholder="Confirm your password"></input>
        <button class="btn sub-btn btn-md">Submit</button>
      </div>
    </form>
    </div>
  );
}

export default Form;

