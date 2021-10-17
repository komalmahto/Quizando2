import React from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import "../../styles/pages/StartQuiz.css";
function StartQuiz() {
  const token = useSelector((store) => store.myStore?.firstName);
  //console.log(token);
  return (
    <div>
      <div
        className="game__info"
        style={{
          backgroundImage: `url(${"https://images.unsplash.com/photo-1614294148960-9aa740632a87?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eGJveHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"})`,
        }}
      >
        <div className="current__prize">
          <h5>Current Prize</h5>
          <h1>€25.00!</h1>
        </div>
        <h2>Brought to you by...</h2>
        <div className="quizando__logo">
          <img
            className="quizando__logo__img"
            src="https://www.quizando.com/assets/quizando_host_icon.png"
          />
          <div className="quizando__text">
            <span>Quizando</span>
          </div>
        </div>
        <Link to="/playQuiz" style={{ textDecoration: "none" }}>
          <div id="play__quiz">
            <h1>Play Quiz!</h1>
            <p>No Tokens Needed!</p>
          </div>
        </Link>
      </div>
      <div className="final__entry">
        <h2 className="final__entry__title">
          Final Entry:
          <span style={{ color: "var(--red)", fontFamily: "Paytone One" }}>
            60m 00s
          </span>
        </h2>
        <hr style={{ width: "80%", margin: " 2% auto" }} />
        <div className="description__btns">
          <h4>Entry Fee:0 tokens</h4>
          <h4>Prize Pool:€25.00</h4>
          <h4>Questions:10</h4>
          <h4>Global Plays:225</h4>
          <h4>Max Plays per Player:7</h4>
          <h4>Free Plays: 7</h4>
        </div>
        <h3 className="game__text">
          Lara Croft, Solid Snake, Pacman, and more are in this 10 question quiz
          on video game characters. The top 10 players split the prize pool.
        </h3>
        <div className="final__entry__btns">
          <button>View Prize Split</button>
          <button>Share quiz</button>
          <button>Play Quiz!</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state.user);
  return {
    check:
      state.user && state.user.register && state.user.register.payload.user,
    user: state.user,
  };
};

export default connect(mapStateToProps)(StartQuiz);
