import React, { Component } from "react";
import JumboSignup from "../components/JumboSignup";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
// import Button from "../components/Button";
import Form from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
// import Button from "../components/Button";
// import { List } from "../components/List";

const serviceSeed = [
  {
    name: "Netflix",
    plan: "https://www.netflix.com/signup/planform",
    usersAmount: 4,
    price: 15.99,
    description: "UHD quality, unlimited movies/TV Shows and cancel anytime",
    category: "Movie Streaming"
  }
]

class Netflix extends Component {

  state={serviceSeed};


  render() {
    return (
      <div>
      <Nav />
      <JumboSignup>
      <h2>Netflix</h2>
      <span>$15.99</span>
        <br></br>
        <span>You can split with Max 3 other users</span>
        <br></br>
        <span>UHD quality, unlimited movies/TV Shows and cancel anytime</span>
      </JumboSignup>
        <Form />
        <hr></hr>
    <Footer />
    </div>
  );
  }
}

export default Netflix;