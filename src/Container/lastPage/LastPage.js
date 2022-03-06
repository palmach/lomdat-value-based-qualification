import React, {useEffect} from "react";
import "./LastPage.css";
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
  useEffect(()=>{ props.setPageNum(3);},[])


  return (
    <div className="last-page">
        <Logos />
      <div className="last-content">
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