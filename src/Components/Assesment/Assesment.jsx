import React from "react";
import "./Assesment.css";
import time from "../../assets/stopwatch.png";
import Countdown from "react-countdown";
import RadioQuestion from "../RadioQuestion/RadioQuestion";
import $ from "jquery";
import { useFullScreen } from "react-browser-hooks";
export default function Assesment() {
  const { toggle, fullScreen } = useFullScreen();

  function disableF5(e) {
    if ((e.which || e.keyCode) === 116) e.preventDefault();
  }
  $(document).keydown(function (e) {
    if (e.keyCode === 27) return false;
  });
  $(document).bind("keydown", disableF5);
  $(document).on("keydown", disableF5);
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Times Up</span>;
    } else {
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <>
      {!fullScreen ? (
        <div className="assesment-container_starttest">
          <div>
            <button
              className="assesment-container_starttest_button"
              onClick={(e) => {
                e.preventDefault();
                toggle();
              }}
            >
              Start Test
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="assesment_header">
            <div className="assesment_header_position">
              <div>
                <div className="assesment_timer">
                  <img src={time} alt="time" className="assesment_time_img" />
                  <Countdown date={Date.now() + 7200000} renderer={renderer} />
                </div>
              </div>
              <div className="assesment_title">React JS</div>
              <div>
                <button
                  onClick={() => {
                    toggle();
                  }}
                  className="assesment_submitbutton_container"
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="assessment_question_container">
              <RadioQuestion />
              <RadioQuestion />
              <RadioQuestion />
              <RadioQuestion />
              <RadioQuestion />
              <RadioQuestion />
              <RadioQuestion />
              <RadioQuestion />
              <RadioQuestion />
              <RadioQuestion />
              <RadioQuestion />
              <RadioQuestion />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
