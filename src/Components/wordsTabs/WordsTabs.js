import React, { useState, useEffect, useRef } from "react";
import "./WordsTabs.css";
import gsap from "gsap";

function WordsTabs(props) {
  const colorRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handelChange = (event) => {
    setInputValue(event.target.value);
  };


  useEffect(() => {
    if (props.isCheacked) {
      if (
        inputValue.trim() === props.endValue
      ) {
        gsap.to(colorRef.current, {
          borderBottomColor: "#56821D",
          duration: 0.25,
          backgroundColor: "whitesmoke",
        });
        // setIsCorrect(true);
      } else {
        gsap.to(colorRef.current, {
          borderBottomColor: "#bb3c02",
          backgroundColor: "whitesmoke",
          duration: 0.75,
          color: "#bb3c02"
        });
        setInputValue(props.endValue);
        // props.setIsCheacked(false);
      }
      setIsCorrect(true);
    }
  }, [props.isCheacked]);

  const cheackEnter = (event) => {
    if(event.key==="Enter"){
      props.moveTab(event, props.nextfiled);
    }
};

  return (
    <input
      ref={colorRef}
      name={props.name}
      className="fill-tab tabs"
      value={inputValue}
      onChange={handelChange}
      disabled={isCorrect}
      autoComplete="off"
      onKeyPress={cheackEnter}
    />
  );
}

export default WordsTabs;
