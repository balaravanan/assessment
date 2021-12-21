import React from "react";
import "./RadioQuestion.css";
export default function RadioQuestion(props) {
  console.log(props);
  return (
    <>
  {props.data && props.data.map(item => (
    <div className="radioquestion__conatiner">
      <div className="radioquestion__question">{item.question}</div>
      <div className="radioquestion__options">
        <div>
          {item.options.map(option => (
            
          <div className="radioquestion__option">
            <div>
              <input
                key={option._id}
               onChange={(e)=>props.addfun(e.target.value,item.subjectTypeId,item._id,item.questionTypeId,option.option)} 
               type="radio" 
               name={item._id} value={option._id}
                />
            </div>
            <div className="radioquestion_option_label">{option.option}</div>
          </div>
          ))}
        </div>
      </div>
    </div>
    ))}
    </>
  );
}
