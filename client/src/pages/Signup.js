import React, { Component } from "react";
import JumboSignup from "../components/JumboSignup";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import FacebookLoginWithButton from 'react-facebook-login';

const componentClicked = () => {
  console.log( "Clicked!" )
}

const LoginButton = ({facebookResponse}) => (
  <FacebookLoginWithButton
appId="200283943885916" //APP ID NOT CREATED YET
fields="name,email,picture"
autoLoad
callback={facebookResponse}
onClick={componentClicked}
icon="fa-facebook"/>
)


const UserScreen = ({user}) => (
  <>
  <h1>Welcome {user.name}!</h1>
<p>{ user.email }</p>
<img src={user.picture.data.url} height={user.picture.height} width={user.picture.width} alt="avatar"/>
  </>
)


class Signup extends Component {
  // Initialize this.state.books as an empty array
  state = {user:false};
  facebookResponse = (response) => { console.log( response ); this.setState( {...this.state, user: response } ) }





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
      console.log("signup");
      console.log(response);
      API.saveUser({
        name: response.name,
        email: response.email,
        userID: response.id
      })
        .then(res => console.log(res));
    };
    const responseFacebook2 = (response) => {
      console.log("login");
      //console.log(response.id.toString());


      API.getUser(response.id)
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
            { this.state.user ? <UserScreen user={this.state.user}/> :
            <LoginButton facebookResponse={this.facebookResponse}/>
            }
          </Col>
          <Col size="md-6 sm-12">
            <JumboSignup>
              <h1>Login With Facebook</h1>
            </JumboSignup>
            { this.state.user ? <UserScreen user={this.state.user}/> :
            <LoginButton facebookResponse={this.facebookResponse}/>
            }
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

// <FacebookLogin
// appId="200283943885916" //APP ID NOT CREATED YET
// fields="name,email,picture"
// autoLoad
// callback={responseFacebook1}
// />