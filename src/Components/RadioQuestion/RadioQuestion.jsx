import React from "react";
import "./RadioQuestion.css";
export default function RadioQuestion() {
  return (
    <div className="radioquestion__conatiner">
      <div className="radioquestion__question">Question</div>
      <div className="radioquestion__options">
        <div>
          <div className="radioquestion__option">
            <div>
              <input type="radio" name="option" value="option1" />
            </div>
            <div className="radioquestion_option_label">Option 1</div>
          </div>
          <div className="radioquestion__option">
            <div>
              <input type="radio" name="option" value="option1" />
            </div>
            <div className="radioquestion_option_label">Option 1</div>
          </div>
          <div className="radioquestion__option">
            <div>
              <input type="radio" name="option" value="option1" />
            </div>
            <div className="radioquestion_option_label">Option 1</div>
          </div>
          <div className="radioquestion__option">
            <div>
              <input type="radio" name="option" value="option1" />
            </div>
            <div className="radioquestion_option_label">Option 1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
