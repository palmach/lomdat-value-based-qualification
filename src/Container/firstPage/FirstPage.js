import React, { useState, useEffect } from "react";
import "./FirstPage.css";
import Logos from "../../Components/logos/Logos";
import MishExpain from "../../Components/mishExpain/MishExpain";
import { useNavigate } from "react-router-dom";

function FirstPage(props) {
  const navigate = useNavigate();

  const [isOpenin, setIsOpenin] = useState(false);
  
  const changeText = () => {
    setIsOpenin(true);
  };

  const btnClick= ()=> {
    navigate("/map");
  }

  useEffect(()=>{ props.setPageNum(0);},[])

  return (
    <div className="first-page">
      {isOpenin ? (
        <MishExpain pageNum={props.pageNum} btnClick={btnClick}/>
      ) : (
        <div className="first-content">
          <Logos />
          <h1 className="headline opening-headline">
            כשירות ערכית בא"ח תותחנים
          </h1>
          <div className="btn normal-text" onClick={changeText}>
            התחל לומדה
          </div>
        </div>
      )}
    </div>
  );
}

export default FirstPage;
