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
  <div>
      <h1>Welcome {user.name}!</h1>
      <p>{ user.email }</p>
      <img src={user.picture.data.url} height={user.picture.height} width={user.picture.width} alt="avatar"/>
  </div>
)


class Signup extends Component {
  state = {user:false};
  facebookResponse = (response) => { console.log( response ); this.setState( {...this.state, user: response } ) }

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
    );
  }
}

export default Signup;

