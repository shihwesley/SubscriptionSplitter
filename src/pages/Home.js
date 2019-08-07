import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
// import Button from "../components/Button";
// import Form from "../components/Form";
// import { Col, Row, Container } from "../components/Grid";
// import Button from "../components/Button";
// import { List } from "../components/List";

class Home extends Component {
  render() {
    return (
     <div>
      <Nav />
      <Jumbotron />
      <Cards />
      <Footer />
     </div>
    );
  }
}

export default Home;