import React from "react";
import "./style.css";

function Nav() {
  return (
  //   <nav className="navbar navbar-dark bg-dark">
  //   <a className="navbar-brand" href="/">All Movies</a>
  //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //     <span class="navbar-toggler-icon"></span>
  //   </button>
  //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
  //   <ul class="navbar-nav ml-auto">
  //     <li class="nav-item active">
  //       <a class="nav-link" href="/Signin">Sign In <span class="sr-only">(current)</span></a>
  //     </li>
  //     <li class="nav-item">
  //       <a class="nav-link" href="/"></a>
  //     </li>
  //   </ul>
  // </div>
  //   </nav>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="/">All Movies</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/Signin">Sign In <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/Signout">Sign Out</a>
      </li>
    </ul>
    
  </div>
</nav>

  );
}

export default Nav;
