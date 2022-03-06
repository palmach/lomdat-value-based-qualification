import React from "react";
import "./AboutPage.css";
import Logos from "../../Components/logos/Logos";

function AboutPage() {
  return (
    <div className="last-page">
        <Logos />
      <div className="about-content">
        <h1 className="headline about-headline">אודות</h1>
        <p className="about-text normal-text">
          <span className="about-titles">ראש מדור מט"ח: </span>רס"ן מור דהן
        </p>
        <p className="about-text normal-text">
          <span className="about-titles">מפקדת הדיגיטל: </span>סגן יעל חפץ
        </p>
        <p className="about-text normal-text">
          <span className="about-titles">מפקדת סטודיו: </span>סג"ם שיר יפה
        </p>
        <p className="about-text normal-text">
          <span className="about-titles">מפתחת הלומדה: </span>רב"ט זוהר סלע
        </p>
        <p className="about-text normal-text">
          <span className="about-titles">עיצוב: </span>רב"ט יובל שוקר
        </p>
        <p className="about-text normal-text">
          <span className="about-titles">מומחה התוכן: </span>סגן נועה מזר
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
