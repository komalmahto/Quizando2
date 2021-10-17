import "../styles/components/QuizCard.css";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function quizCard(props) {
  console.log(props);

  return (
    <>
      <div className="card">
        <div className="card__fix__block">
          <img
            className="card__logo"
            src="https://www.quizando.com/assets/quizando_host_icon.png"
            alt="card"
          />
          <div className="card__logo__name">
            <span>Quizando</span>
          </div>
        </div>

        <h1>{props.title}</h1>

        <div className="card__bottom">
          <h2>PLay For Free</h2>
          <h6>Special Prizes! </h6>
          <NavLink to="/start" className="card__bottom__btn">
            PLay Now
          </NavLink>
          <p>Closes: @4:30PM</p>
        </div>
      </div>
    </>
  );
}
export default quizCard;
