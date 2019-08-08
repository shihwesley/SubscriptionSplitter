import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import { Col, Row, Container } from "../components/Grid";

const serviceSeed = [
  {
    name: "Netflix",
    plan: "https://www.netflix.com/signup/planform",
    usersAmount: 4,
    price: 15.99,
    description: "UHD quality, unlimited movies/TV Shows and cancel anytime",
    category: "Movie Streaming"
  },
  {
    name: "YouTube TV",
    plan: "https://tv.youtube.com/welcome/",
    usersAmount: 6,
    price: 49.99,
    description: "Live TV from 70+ networks including local sports and news. No cable box required.",
    category: "Live TV"
  },
  {
    name: "Chegg" ,
    plan: "https://www.chegg.com/study" ,
    usersAmount: "Unlimited",
    price: 14.95,
    description: "Textbook solutions, Expert Q&A",
    category: "Study"
  },
  {
    name: "Pandora" ,
    plan: "https://www.pandora.com/upgrade/premium/family-plan" ,
    usersAmount: 6,
    price: 14.99,
    description: "Create your own radio station based on preferred artists",
    category: "Music"

  },
  {
    name: "HBO Now!" ,
    plan: "https://subscribe.hbonow.com/?returnPath=%2Fpage%2Furn%3Ahbo%3Apage%3Ahome&origin=playStartFreeTrial&sessionId=23df73fb-058e-41c8-d80e-b1b47c6cad16" ,
    usersAmount: "Unlimited",
    price: 14.99,
    description: "Access to everything HBO offers, with no cable needed",
    category: "Movie Streaming"
  },
  {
    name: "iHeartRadio" ,
    plan: "https://ondemand.iheart.com/" ,
    usersAmount: 5,
    price: 14.99,
    description: "enables users to listen to their favorite stations across the world",
    category: "Music"
  },
  {
    name: "Crunchy Roll" ,
    plan: "https://www.crunchyroll.com/premium_pick_plan?membership=premium" ,
    usersAmount: "Unlimited",
    price: 7.99,
    description: "Anime streaming service",
    category: "Anime"
  }];

class Home extends Component {

  state= {
    serviceSeed
  };




  render() {
    return (
     <div>
      <Nav />
      <Jumbotron />
      <Container>
      <Row>
      {this.state.serviceSeed.map(service => (
          <Cards
        name={service.name}
        plan={service.plan}
        userAmount={service.usersAmount}
        price={service.price}
        description={service.description}
        category={service.category}
    />
  ))}
      </Row>
      </Container>
      <Footer />
     </div>
    );
  }
}

export default Home;