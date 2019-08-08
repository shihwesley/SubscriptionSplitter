// import React,  { Component } from 'react';
// import './App.css';

// import { Button, Form, FormGroup, Label, Input, Nav, Jumbotron } from "reactstrap";
// import { FacebookLoginButton } from 'react-social-login-buttons';

// class App extends Component {
//   render() {
//     return (
//       <div>
//       <Nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <a className="navbar-brand" href="#">Navbar</a>
//         <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </Button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ml-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">About</a>
//           </li>
//           <li className="nav-item">
//           <a className="nav-link" href="#">Services</a>
//         </li>
//         <li className="nav-item">
//         <a className="nav-link" href="#">Contact</a>
//       </li>
     
//     </ul>
//   </div>
// </Nav>
  
//       <Form className="login-form">
//         <h1>
//           <span>My Website</span>
//         </h1>
//         <h2 className="text-center">Welcome</h2>
//         <FormGroup>
//           <Label>Email</Label>
//           <Input type="email" placeholder="Email" />
//         </FormGroup>
//         <FormGroup>
//           <Label>Password</Label>
//           <Input type="password" placeholder="Password" />
//         </FormGroup>
//         <Button className="btn-lg btn-dark btn-block">Log in</Button>
//         <div className="text-center pt-3">Or continue with your social account</div>
//         <FacebookLoginButton className="mt-3 mb-3"/>
//         <div className="text-center">
//           <a href="/sign-up">Sign up</a>
//           <span className="p-2">|</span>
//           <a href="/sign-up">Forgot Password</a>
//         </div>
//       </Form>

//       </div>
//     );
//   }  
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";



function App() {
  return (
    <Router>
      <div>   
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Netflix" component={Netflix} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;

// <Route exact path="/HBOnow" component={HBOnow} />
// <Route exact path="/iHeartradio" component={iHeartradio} />
// <Route exact path="/Crunchyroll" component={Crunchyroll} />
// <Route exact path="/YoutubeTV" component={YoutubeTV />
// <Route exact path="/Spotify" component={Spotify} />
// <Route exact path="/Chegg" component={Chegg} />
