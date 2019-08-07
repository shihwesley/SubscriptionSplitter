import React, { Component } from "react";
import JumboSignup from "../components/JumboSignup";
import { Col, Row, Container } from "../components/Grid";
import FacebookLogin from 'react-facebook-login';
import API from "../utils/API";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

class Signup extends Component {
  // Initialize this.state.books as an empty array
  state = {
    title: "",
    author: ""
  };


  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };
  // Add code here to get all books from the database and save them to this.state.books

  render() {
    const responseFacebook1 = (response) => {
      console.log(response);
      API.saveBook({
        title: response.name,
        author: response.id
      })
        .then(res => console.log(res));
    };
    const responseFacebook2 = (response) => {
      console.log("login");
      //console.log(response.id.toString());


      API.getBook(response.id)
        .then(res => console.log(res.data));

      API.getService()
        .then(res => console.log(res.data));
    };


    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col size="md-6">
            <JumboSignup>
              <h1>SignUp With Facebook</h1>
            </JumboSignup>
            <FacebookLogin
              appId="200283943885916" //APP ID NOT CREATED YET
              fields="name,email,picture"
              callback={responseFacebook1}
            />
          </Col>
          <Col size="md-6 sm-12">
            <JumboSignup>
              <h1>Login With Facebook</h1>
            </JumboSignup>
            <FacebookLogin
              appId="200283943885916" //APP ID NOT CREATED YET
              fields="name,email,picture"
              callback={responseFacebook2}
            />
          </Col>
        </Row>
        <Footer />
      </Container>
      // {this.state.books.length ? (
      //   <List>
      //   {this.state.books.map(book => (
      //       <ListItem key={book._id}>
      //     <Link to={"/books/" + book._id}>
      //     <strong>
      //     {book.title} by {book.author}
      //       </strong>
      //       </Link>
      //       <DeleteBtn onClick={() => this.deleteBook(book._id)} />
      // </ListItem>
      // ))}
      // </List>
      // ) : (
      // <h3>No Results to Display</h3>
      // )}

    );
  }
}

export default Signup;
