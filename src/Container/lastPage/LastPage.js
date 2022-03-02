import React from "react";
import "./LastPage.css";
import OpeningBack from "../../Components/openingBack/OpeningBack";
import SkyBack from "../../Components/skyBack/SkyBack";
import Logos from "../../Components/logos/Logos";
import { useNavigate } from "react-router-dom";

function LastPage(props) {
  const navigate = useNavigate();

  const restart = () => {
    navigate("/");
  };

  const toAbout = () => {
    navigate("/about");
  };

  return (
    <div className="last-page">
      <SkyBack />
      <OpeningBack />

      <div className="last-content">
        <Logos />
        <h1 className="headline last-headline">כל הכבוד סימתם את הלומדה!</h1>
        <p className="normal-text last-text">
          אם אתם מרגישים לא מוכנים עדיין אתם מוזמנים לחזור על הלומדה כמה שתרצו.
        </p>
        <div className="btn-div">
          <div className="btn normal-text" onClick={restart}>
            עוד פעם!
          </div>
          <div className="btn normal-text" onClick={toAbout}>
            אודות
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastPage;