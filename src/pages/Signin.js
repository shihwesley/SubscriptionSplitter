import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Button from "../components/Button";


class Signin extends Component {
  render() {
    return (
     <div>
      <Nav />
      <Jumbotron />
      <Form />
      <Button />
      <Footer />
     </div>
    );
  }
}

export default Signin;