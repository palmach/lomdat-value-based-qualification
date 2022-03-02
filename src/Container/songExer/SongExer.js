import React, { useEffect, useState } from "react";
import "./SongExer.css";
import ExerBack from "../../Components/exerBack/ExerBack";
import SkyBack from "../../Components/skyBack/SkyBack";
import WordsTabs from "../../Components/wordsTabs/WordsTabs";
import MishExpain from "../../Components/mishExpain/MishExpain";
import BeforeQuestion from "../../Components/beforeQuestion/BeforeQuestion";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import Text from "../../Text.json";

function SongExer(props) {
  const [isCheacked, setIsCheacked] = useState(false);
  const [isExpain, setIsExpain] = useState(true);
  const [isBefore, setIsBefore] = useState(true);
  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/last");
  };

  const panc = ["", ",", "", "-", ",", ",", "", "."];
  useEffect(() => {
    props.setPageNum(2);
  }, []);

  const btnClick = () => {
    if (isExpain) {
      setIsExpain(false);
    } else {
      setIsCheacked(false);
      setIsBefore(false);
    }
  };

  const showAns = () => {
    setIsCheacked(true);
    gsap.to(".answer", {
      duration: 0.25,
      opacity: 1,
    });
  };

  const cheackBtn = () => {
    if (isCheacked === false) {
      setIsCheacked(true);
    }
    console.log("cheach");
  };

  const moveTab = (event, index) => {
      if(event.key==="Enter"){
          let nextfiled;
        //   if (index + 1 !== 3) {
            nextfiled = document.querySelector(index);
        //   } else {
        //     nextfiled = document.querySelector(index + 2);
        //   }
          if (nextfiled !== null) {
            nextfiled.focus();
          }

      }
  };

  return (
    <div className="song-exer-cont">
      {/* <SkyBack />
      <ExerBack /> */}
      {isExpain ? (
        <MishExpain pageNum={props.pageNum} btnClick={btnClick} />
      ) : isBefore ? (
        <div className="before-questions">
          <h1 className="headline explain-headline">
            {Text[props.pageNum]["q-headlin"]}
          </h1>
          {Text[props.pageNum]["q"].map((ques, index) => {
            return (
              <BeforeQuestion
                key={index}
                index={index}
                isCheacked={isCheacked}
                ques={ques}
                pageNum={props.pageNum}
              />
            );
          })}
          <div
            className="btn normal-text"
            onClick={isCheacked === false ? showAns : btnClick}
          >
            {isCheacked === false ? "בדיקה" : "הבא"}
          </div>
        </div>
      ) : (
        <div className="words-cont">
          {Text[props.pageNum]["song"].map((vers, lineIndex) => {
            return (
              <div className="line-cont">
                {Text[props.pageNum]["song"][lineIndex].map(
                  (word, wordIndex) => {
                    console.log(lineIndex * 4 + wordIndex);
                    console.log(
                      "lineIndex " + lineIndex + " wordIndex " + wordIndex
                    );
                    return (
                      <WordsTabs
                        key={lineIndex * 4 + wordIndex}
                        wordIndex={wordIndex}
                        lineIndex={lineIndex}
                        name={`field-${() => {
                          return lineIndex +"-"+ wordIndex;
                        }}`}
                        endValue={word}
                        isCheacked={isCheacked}
                        setIsCheacked={setIsCheacked}
                        nextfiled={document.querySelector(
                            `input[name=filed-${wordIndex +1 !== null? lineIndex +"-"+ wordIndex+1 :lineIndex+1 +"-0"}]`
                          )}
                          moveTab={moveTab}
                      />
                    );
                  }
                )}
                <p className="panc">{panc[lineIndex]}</p>
                <br />
              </div>
            );
          })}
          <div
            className="btn normal-text"
            onClick={isCheacked === false ? cheackBtn : nextPage}
          >
            {isCheacked === false ? "בדיקה" : "הבא"}
          </div>
        </div>
      )}
    </div>
  );
}

export default SongExer;