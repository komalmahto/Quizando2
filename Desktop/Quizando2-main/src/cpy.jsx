import React from "react";
import "./rough.css";
import { Button } from "@mui/material";
function rough() {
  return (
    <div>
      <div className="detail__question">
        <div className="detail__wrapper">
          <div className="detail__wrapper2">
            <div className="detail__wrapper3">
              <div className="answer__section detail__content">
                <p className="question animated dts fadeInDown">
                  <span className="classic__question">what does it threw</span>
                </p>
                <div className="question_image_container">
                  <div className="answer__container">
                    <button className="answer_animated animated flipInX">
                      <p className="answer_number">1</p>
                      <p className="answer__text hoverAnswer">
                        <span className="ng_content"> answerrr</span>
                      </p>
                    </button>
                    <button className="answer_animated animated flipInX">
                      <p className="answer_number">1</p>
                      <p className="answer__text hoverAnswer">
                        <span className="ng_content"> answerrr</span>
                      </p>
                    </button>
                    <button className="answer_animated animated flipInX">
                      <p className="answer_number">1</p>
                      <p className="answer__text hoverAnswer">
                        <span className="ng_content"> answerrr</span>
                      </p>
                    </button>
                    <button className="answer_animated animated flipInX">
                      <p className="answer_number">1</p>
                      <p className="answer__text hoverAnswer">
                        <span className="ng_content"> answerrr</span>
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper_sound__on__off">
          <div className="sound__on__off">
            {/* {playing ? <VolumeUpIcon /> : <VolumeOffIcon />}
                    {toggle} */}
            <Button style={{ color: "var(--light)" }}>Soun On</Button>
          </div>
        </div>
        <div className="quiz_landing_container">
          <div className="quiz_landing_info">
            <div className="quiz_item_info">
              <div className="inner_div">
                <div className="text_large">0</div>
                <div className="subtext">Your Current Score</div>
              </div>
            </div>
            <div className="quiz_item_info">
              <div className="inner_div">
                <div className="text_large">0</div>
                <div className="subtext">Questions Remaining</div>
              </div>
            </div>
            <div className="quiz_item_info">
              <div className="inner_div">
                <div className="text_large">0</div>
                <div className="subtext">Points</div>
              </div>
            </div>
            <div className="quiz_item_info">
              <div className="inner_div">
                <div className="text_large">0</div>
                <div className="subtext">Your Best Score</div>
              </div>
            </div>
            <div className="quiz_item_info">
              <div className="inner_div">
                <div className="text_large">0</div>
                <div className="subtext">LeaderBoard First Place</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default rough;
