import React from "react";
import "./MishExpain.css";
import Text from "../../Text.json";
import { Markup } from "interweave";

function MishExpain(props) {
  return (
    <div className="mish-expain">
      <h1 className="headline explain-headline">
        {Text[props.pageNum]["headlin"]}
      </h1>
      <Markup
        className={`normal-text expain-text`}
        content={Text[props.pageNum]["text"]}
      />

      <div className="btn normal-text" onClick={props.btnClick}>
        {Text[props.pageNum]["btn"]}
      </div>
    </div>
  );
}

export default MishExpain;
