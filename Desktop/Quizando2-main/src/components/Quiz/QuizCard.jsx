import "./QuizCard.css";
import axios from "axios";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import moment from "moment";
// moment.tz.add(
//   "Asia/Calcutta|HMT BURT IST IST|-5R.k -6u -5u -6u|01232|-18LFR.k 1unn.k HB0 7zX0"
// );
// moment.tz.link("Asia/Calcutta|Asia/Kolkata");
function quizCard(props) {
  //console.log(props.quizDetail);

  //const thisMoment = moment.utc(quizDetail.endDate).format("h:mm");
  // if (quizDetail)
  //   console.log(
  //     moment.utcOffset(quizDetail.endDate).format(" MMMM Do YYYY,h:mm:ss a")
  //   );

  return (
    <>
      {props.quizDetail && (
        <div className="card" style={{ borderRadius: "7px" }}>
          <div className="card__fix__block">
            <img
              className="card__logo"
              src="https://www.quizando.com/assets/quizando_host_icon.png"
              alt="card"
            />
            <div
              className=""
              n
              style={{
                marginTop: "-20px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <span className="span_logo">Quizando</span>
              <span className="s_span "></span>
            </div>
          </div>

          <h1>{props.quizDetail?.title}</h1>

          <div className="card__bottom">
            {props.quizDetail?.isFreebie ? <h2>PLay For Free!</h2> : " "}

            <h6 style={{ fontSize: "1.8em", fontWeight: "600" }}>
              Special Prizes!{" "}
            </h6>
            {props.quizDetail?.isFreebie === true &&
            props.quizDetail?.liveQuiz === true ? (
              <Link
                className="card__bottom__btn"
                to={`/start/live/${props.quizDetail?._id}`}
              >
                Play Now!
              </Link>
            ) : props.quizDetail?.isFreebie === true ? (
              <Link
                className="card__bottom__btn"
                to={`/start/free/${props.quizDetail?._id}`}
              >
                Play Now!
              </Link>
            ) : (
              <Link
                className="card__bottom__btn"
                to={`/start/classic/${props.quizDetail?._id}`}
              >
                Play Now!
              </Link>
            )}

            <p
              style={{
                fontSize: "1.5em",
                fontWeight: "400",
                fontFamily: "Titillium Web",
              }}
            >
              Closes :
              {moment
                .utc(props.quizDetail?.endDate)
                .format(" MMMM Do YYYY,h:mm:ss a")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
export default quizCard;
