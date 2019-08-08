import React from "react";
import "./style.css";
import Signup from "../../pages/Signup";
import {Route} from "react-router";

function Cards(props) {
  var string_link = "/" + props.name;
  console.log(string_link);
  return (
  <div class="col-lg-4 card-outline">
    <div class="card">
      <div class="card__header">
        <div class="card__picture">
          <div class="card__picture-overlay">&nbsp;</div>
        </div>
        <h3 class="heading-tertirary">
          <span>{props.name}</span>
        </h3>
      </div>
      <div class="card-body">
        <h5 class="card-title">${props.price}</h5>
        <p class="card-text">{props.description}</p>
        <a href={string_link} class="btn btn-primary btn-sub">View More</a>
      </div>
    </div>
  </div>

);
}

export default Cards;