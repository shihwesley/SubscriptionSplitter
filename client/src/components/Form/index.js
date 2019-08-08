import React from "react";
import "./style.css";


function Form() {
  return (
    <div class="container">
    <h3>Create Your Group</h3>
    <form>
      <div class="form-group">
        <label for="service">Service</label>
        <input type="service" class="form-control" id="service"  placeholder="What service do you want to split"></input>
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

