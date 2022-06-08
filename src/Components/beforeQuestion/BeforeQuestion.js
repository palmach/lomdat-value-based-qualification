import React, { useState, useEffect } from "react";
import "./BeforeQuestion.css";
import Text from "../../Text.json";
import gsap from "gsap";


function BeforeQuestion(props) {
  const [inputValue, setInputValue] = useState("");

  const handelChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    //אם ענו על השאלות של רגע לפני לא נכון יופיע הטקסט באדום
    if (inputValue!==Text[props.pageNum]["a"][props.index]) {
      gsap.to(`.ans${props.index}`, {
        //אדום
        color:"#c1272d"
      });
    } else{
      gsap.to(`.ans${props.index}`, {
        //ירוק
        color:"#56821D"
      });
    }
  }, [props.isCheacked]);


  return (
    <div className="question-div" key={props.index}>
      <p className="input-text normal-text input-question">{props.ques}</p>
      <input
        name={`q${props.index}`}
        className="question normal-text input-text"
        value={inputValue}
        onChange={handelChange}
        readOnly={props.isCheacked}
        autoComplete="off"
      />
      <p className= {`normal-text answer input-text ans${props.index}`}>
        {Text[props.pageNum]["a"][props.index]}
      </p>
    </div>
  );
}

export default BeforeQuestion;