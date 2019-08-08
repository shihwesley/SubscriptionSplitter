import React from "react";
import "./style.css";


function Form() {
  return (
    <div class="container">
    <h3>Create Your Group</h3>
    <form>
      <div class="form-group">
        <label for="service">Name</label>
        <input type="service" class="form-control" id="name"  placeholder="What name do you want to call your group"></input>
        <label for="password">Description</label>
        <input type="email" class="form-control" id="description"  placeholder="Describe who you want to split it with"></input>
        <label for="confirmPassword">UserAmount</label>
        <input type="email" class="form-control" id="useramount"  placeholder="The amount of users that you want to split it with"></input>
        <button class="btn sub-btn btn-md">Submit</button>
      </div>
    </form>
    </div>
  );
}

export default Form;

