import React, { Component } from "react";
import JumboSignup from "../components/JumboSignup";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Form from "../components/Form";
import { Col, Row, Container } from "../components/Grid";
import Button from "../components/Button";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Forms";

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

  state = {
    groups: [],
    name: "",
    description: "",
    useramount: "",
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getgroups()
      .then(res =>
        this.setState({ groups: res.data, name: "", description: "", useramount: "" })
      )
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("pressed");
    console.log("state: " + this.state.name);
    const {name, description, useramount} = this.state;
    console.log({name, description, useramount});
    API.saveGroup({name, description, useramount})
      .then(res => {
        console.log('lol');
      })
  };


  render() {
    return (
      <div>
      <Nav />

        <Container fluid>
        <Row>
        <Col size="md-6">
          <JumboSignup>
            <h2>Netflix</h2>
            <span>$15.99</span>
            <br></br>
            <span>You can split with Max 3 other users</span>
            <br></br>
            <span>UHD quality, unlimited movies/TV Shows and cancel anytime</span>
          </JumboSignup>
        <form>
          <label htmlFor="service">Name</label>
          <input type="service" className="form-control" id="name" name="name"
                 placeholder="What name do you want to call your group" onChange = {this.handleInputChange}></input>
          <label htmlFor="password">Description</label>
          <input type="email" className="form-control" id="description" name="description"
                 placeholder="Describe who you want to split it with" onChange = {this.handleInputChange}></input>
          <label htmlFor="confirmPassword">UserAmount</label>
          <input type="email" className="form-control" id="useramount" name="useramount"
                 placeholder="The amount of users that you want to split it with" onChange = {this.handleInputChange}></input>
          <FormBtn onClick={this.handleFormSubmit}>Submit Group</FormBtn>
        </form>
        </Col>
        <Col size="md-6 sm-12">
        <JumboSignup>
        <h1>Open Netflix Groups</h1>
        </JumboSignup>
        {this.state.groups.length ? (
          <List>
            {this.state.groups.map(group => {
              return (
                <ListItem key={group._id}>
                  <a href={"/groups/" + group._id}>
                    <strong>
                      {group.name}: {group.description}
                    </strong>
                    <strong>
                      {group.useramount}
                    </strong>
                  </a>
                </ListItem>
              );
            })}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
        </Col>
        </Row>
        </Container>

        <Footer />
    </div>
  );
  }
}

export default Netflix;