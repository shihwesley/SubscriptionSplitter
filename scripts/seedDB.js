const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.mongoURI ||
  "mongodb://localhost/subsplit"
);

<<<<<<< HEAD

=======
>>>>>>> cd52ac0af826173eb9629643ef8bba094ca104e0
 //this where we input all the different services
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
  

db.Service 
  .remove({})
  .then(() => db.Service.collection.insertMany(serviceSeed))
  .then(data => {
    console.log(data.result.n + " service inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
