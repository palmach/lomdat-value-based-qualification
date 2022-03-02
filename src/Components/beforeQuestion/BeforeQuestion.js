import React, { useState } from "react";
import "./BeforeQuestion.css";
import Text from "../../Text.json";

function BeforeQuestion(props) {
  const [inputValue, setInputValue] = useState("");

  const handelChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="question-div" key={props.index}>
      <p className="input-text normal-text input-question">{props.ques}</p>
      <input
        name={`q${props.index}`}
        className="question normal-text input-text"
        value={inputValue}
        onChange={handelChange}
        disabled={props.isCheacked}
        autoComplete="off"
      />
      <p className=" normal-text answer input-text">
        {Text[props.pageNum]["a"][props.index]}
      </p>
    </div>
  );
}

export default BeforeQuestion;