import React, { useState, useEffect } from "react";
import "./MapExer.css";
import Text from "../../Text.json";
import { DragDropContainer, DropTarget } from "react-drag-drop-container";
import MishExpain from "../../Components/mishExpain/MishExpain";
import CityPlacment from "../../Components/cityPlacment/CityPlacment";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

function MapExer(props) {
  const [isExpain, setIsExpain] = useState(true);
  const [currPart, setCurrPart] = useState(0);
  const part = ["country", "city"];

  const [data, setData] = useState([]);

  const countryData = [0, 0, 0, 0, 0, 0];
  const [countryCounter, setCountryCounter] = useState(0);

  const cityData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [cityCounter, setCityCounter] = useState(0);

  const [isNext, setIsNext] = useState(true);
  const navigate = useNavigate();

  const btnClick = () => {
    setIsExpain(false);
  };

  useEffect(() => {
    props.setPageNum(1);
    setData(countryData);
    // gsap.to(`.drop-country`, {
    //   borderColor: "#083e58",
    //   // backgroundColor: "#ffff",
    // });
  }, []);

  const nextBtn = () => {
    if (currPart === 1) {
      navigate("/song");
    } else {
      setCurrPart(1);
      setIsNext(true);
      setData(cityData);
    }

    // gsap.to(`.drop-country`, {
    //   borderColor: "transparent",
    //   fontSize: "10vh",
    //   // borderColor: "rgb(255 255 255)",
    //   duration: 0.75,

    //   // backgroundColor: "#ffff",
    // });
  };

  const handleHit = (e) => {
    e.stopPropagation();
    if (currPart === 0) {
      let item = [...data];
      item[e.dragData.index.index] = 1;
      setCountryCounter((prev) => prev + 1);
      setData(item);
      gsap.to(`.drop-${part[currPart]}${e.dragData.index.index}`, {
        borderColor: "#56821D",
        backgroundColor: "#ffff",
      });
    } else {
      let item = [...data];
      item[e.dragData.index.index] = 1;
      setCityCounter((prev) => prev + 1);
      setData(item);
    }
    e.containerElem.style.display = "none";
  };

  useEffect(() => {
    if (
      (currPart === 0 && countryCounter === 6) ||
      (currPart === 1 && cityCounter === 15)
    ) {
      setIsNext(false);
    }
  }, [data]);

  return (
    <div className="map-exer ">
      {isExpain ? (
        <MishExpain pageNum={props.pageNum} btnClick={btnClick} />
      ) : (
        <div className="map-cont">
          <div className="map-drop-cont">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 682.27 1542.83"
            className="map"
          >
            <defs></defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  className="map-white-back"
                  d="M518.24,791.76c3-1.06-2.1,1.73-2.1,1.73-5.92,4.28-12.11,8.23-19.44,10.79a5.2,5.2,0,0,0-3.15,2.6c-2.42,4.86-.77,6.32-4.05,10.8-6.59,9-6.14,17.92.5,26.8,1.69,2.26,3.31,3.12,6.39,1.35,2.08-1.2,11.28,0,12.45,1.7,3.91,5.54,4.92,8.77,11.51,7.78,3-.45,6.35.3,7.15,2.61,1.13,3.28,1,6.87,1.22,10.33.21,2.7-2.93,3.85-4.8,4.57-4,1.55-3.77,4.09-3.48,6.65.19,1.77,1.27,3.48,2,5.2,1.9,4.41,0,10.45-4.26,12a22.53,22.53,0,0,1-8.86,1.29c-6.59-.49-16.65,6.87-17.35,7.45a16.05,16.05,0,0,1-2.54,5.67c-2.57,3.24,2.44,18,1.93,22-.62,4.9-1.9,9.74-2.12,14.69-.07,1.61-.74,3.71-2.09,4.67-6.1,4.35-10.26,10.26-17.7,13.59-10.31,4.62-15.5,12.45-15.62,21.94a26.77,26.77,0,0,1-3.71,14.33c-3,5-4.58,10.63-7,15.9-2.81,6-3.25,12.56-5.54,18.51-5.71,14.82-12.66,29.32-23.18,42.5-3.83,4.8-8.69,9-11.38,14.55-3.34,6.94-2.45,14.34-5.06,21.25-3.29,8.68-.75,18.61-8.36,26.38a71.27,71.27,0,0,0-4.74,5.6c-3.34,4.22-5.25,10-3.13,13.61a141.05,141.05,0,0,1,7.89,14.47c3.64,8.19,2.65,15.7-4.26,22.47a12.1,12.1,0,0,0-3.66,6.92c-.35,2.17-.59,4.34-1.07,6.48-1.7,7.5-3.86,14.94-5.1,22.49-.77,4.69-1.27,10,1.16,14.15,5.38,9.15,5.44,18.74,4.2,28.16-1.37,10.46-7.28,19.57-18.63,25.5a15.39,15.39,0,0,0-7.83,8.67c-1.76,5-2.72,10.22-4.94,15.07a12.2,12.2,0,0,0-.58,9c1.23,3.57.29,5.89-2.41,8.28a15.47,15.47,0,0,0-5.39,11.66c-.31,7.66.71,15.25.52,22.92-.33,13.47-5.72,25-14.54,35.87-1.35,1.66-3.14,3.34-3.58,5.19a57.41,57.41,0,0,0-.54,23.31c1.55,8.9,1.06,16.64-7.21,24-8.54,7.56-14,16.87-13.47,27.91.27,5.62,1.83,11.18,1.16,16.85-.42,3.6.11,7,3.08,10,1.32,1.32,1.87,3.09.56,4.71-3.44,4.21-6.8,8.48-10.54,12.51-3.58,3.87-13,5.31-18.3,3-.53-.23-1.69-.16-1.64-1.24.24-5.08-4.47-8.46-7-12.43-7.54-11.68-16-22.73-16-36.83,0-3.81.2-7.21,2.11-10.33,5.34-8.7,3.56-17.16-.72-25.5-1.45-2.82-4.33-5.2-5.08-8.26-1.32-5.4,0-11-1.64-16.41-2-6.7-1.74-13.82-4.82-20.28a120.65,120.65,0,0,1-9.05-27.3c-2.54-12.27-8.74-23.5-12.41-35.39-1.46-4.74-5.37-8.61-6.88-13.38-2.23-7.11-4.48-14.24-7.39-21.16-3.49-8.32-8.42-16.12-10.11-25.06-1.73-9.12-8.1-17.22-10.38-26.38-2.17-8.72-4.88-17.36-7.85-25.92a267.8,267.8,0,0,0-11.44-27.69c-3.26-6.78-6.86-13.51-5.87-21.17.92-7.21-4.53-12.21-12.55-14.28-6.09-1.56-12.16-3.12-17.4-6.39-2.89-1.8-4.45-3.56-3.14-6.56a3,3,0,0,0,0-2.14c-2.24-6-.84-11.41,3-16.93,4.94-7,1.52-15.28-7.21-19.8a8.61,8.61,0,0,1-4.73-6.49,81,81,0,0,1-1.63-16.85c.1-7.06,1-14.07-.3-21.2-1.59-8.36-6.8-15.62-9.33-23.69-2.42-7.72-6.85-15-10.25-22.53-3.64-8.06-7.58-16-12-23.8C79.32,992,72.86,979,69.65,965.05A52.83,52.83,0,0,0,64,950.73a60.28,60.28,0,0,1-6.27-15.1c-1.46-5.85-1.36-11.92-5.33-17.31-1.48-2-2-4.53-2.7-6.87C46.51,901,44.14,890.23,40.06,880c-5.57-14-11.41-27.88-16.93-41.88-4.22-10.72-8-21.62-13.33-32.07-1.3-2.56-2.32-5.43-5.33-6.83-4-1.87-3.36-4-.94-6.08,3.44-2.92,7.36-5.46,11-8.26,17.65-13.76,33.27-29.1,49.82-43.71,9-7.92,18.12-15.8,25.32-25,8.51-10.84,16.89-21.76,25.79-32.39,12.77-15.26,22.6-31.93,34.45-47.65,9-12,16.89-24.57,24.75-37.12,5.56-8.87,10.22-18.12,15.33-27.18,9.06-16,18.26-32,22.24-49.67,2.23-9.87,7.95-19,13.21-28,6-10.26,12.2-20.47,18.1-30.8a59.16,59.16,0,0,0,7.25-18.58c1.68-9.34,2.9-18.72,7-27.64,1-2.24-.17-5.15,2.17-6.85,2.55-1.84,2.94-4.21,3.56-6.56,2.26-8.47,4.83-16.87,6.5-25.47,1.52-7.73,4.64-15.24,6.62-22.93,3.14-12.27,7.45-24.44,6.8-37.15-.24-4.59,1.83-8.5,3.78-12.52.73-1.5,2.06-2.82,2.55-4.35,3.7-11.31,6.13-22.76,5.33-34.56a7.75,7.75,0,0,1,.93-4.35c2.38-4.51,4.24-9.21,6.42-13.79s.08-9.64,1.22-14.23c1.87-7.49,1.81-15,2-22.5a27.2,27.2,0,0,1,1.08-7.77c2-6.32,9.59-10,16.26-7.46a14,14,0,0,1,6.61,4.93c1.83,2.62,3.82,2.43,6.47,1.65,4.42-1.3,9.83-2.31,11.84-5.71,3.23-5.49,7.6-10.88,8-17.19.38-5.81.16-11.68-4-16.89-.82-1-.43-2.48-.19-3.87.89-5.15,3.06-10,4.28-15.11,2.93-12.23,5.51-24.51,8.53-36.71.85-3.44,2.45-7.7,6.8-8.41a43.19,43.19,0,0,1,16.72.28c8.26,2,15.86,2.24,23.21-2.19,2.78-1.67,6.39-1.91,9.92-1.37,5.56.86,10.79.45,15.82-2.07,2.24-1.13,4.6-.59,7.41.59a34.76,34.76,0,0,1,14.07,11c3,3.7,7.08,5.36,12.59,5.71,13.61.85,24.45-4.67,35.06-10.2,4.37-2.28,7.78-3.54,12.81-2.14,1.86.51,5.27,1.9,6.64-.34,2.71-4.42,6.24-9.13,6.4-13.78.1-3.08.07-6.43,1.83-8.5C539,70,537.64,63.93,535,57.59c-.48-1.15-1.72-2.7-.9-3.39,4.92-4.23,3.27-9.42,3.6-14.34.19-2.88.26-6,4.2-7.3,4.22-1.37,6.19-3.63,6.41-7.39.09-1.54.4-3.84,3.55-3.89,2.72,0,4.78.6,5.84,3a46.38,46.38,0,0,0,4.18,7.35c3.21,4.68,6.6,4.64,9.94,0,4.19-5.8,4.68-6.08,12.59-4.27,4.36,1,7-.09,8.45-3.5.61-1.39.53-3.19,2.6-3.89,6.54-2.22,10.78-6.6,15.27-10.79,1.13-1,2.72-2.42,4.17-2.49,4.68-.23,7.91-2.62,11.64-4.81a38.82,38.82,0,0,0,12,6c6.14,2,6.76,3.89,3.17,8.18-5.91,7.07-5,10.18,4.21,14.25,2.15.95,4.74,1.61,5.2,3.91.7,3.45,2.84,6.7,2.17,10.37-.25,1.35-.3,3.17,1.09,3.8,4.51,2,4.7,6,6.76,9.16,4.51,6.85,4.43,13.62-.51,20.31-1.07,1.43-2.57,2.78-3.06,4.34-.88,2.8-1.79,5.79-1.47,8.6.25,2.28,3.18,3.11,6.1,3.11.52,0,1.22.72,1.54,1.24,2.78,4.41,7.13,8.22,7.89,13.39a87.81,87.81,0,0,0,6.48,23.28c4.41,9.84,2.68,19-1,28.62-3.08,8-8.86,14.93-10.65,23.65C663.94,196.27,659.74,208.6,647,217c-3.33,2.19-4.76,5-5.53,8.59-.62,2.87.94,8.09-6.58,7.55-1-.07-2.76,1.43-3.75,2.83-3.63,5.16-9.7,7.69-16.13,10.11-4.83,1.81-10.63,3.21-13.13,7.67-3,5.36-10.87,5.26-14.78,9.48-8-.41-15,2.9-22.55,4.43-3.16.65-6,1.88-7.08,5.46-1.53,5.14-.4,10,.91,14.71,1.46,5.28,2.06,10.34.44,15.6-.33,1.07-.68,2.49.94,3.47s3.23,2.24,4.5,3.14c-1.26,3.26-4.48,3.62-6.62,5-8.19,5.23-8.45,12-.49,17.35a19.39,19.39,0,0,1,3.65,3c2,2.19,4.07,4.15-.91,6.19-3.12,1.28-6.29,3.86-4.28,7.6,3.15,5.87,3,6.87-2.12,11.25-4.71,4-4.8,4.91-1.06,9.94-4.38,5-4.26,5.17.48,10.4,1.86,2.05,4,4.19-.92,6.15-3.29,1.32-5.13,6.93-3.13,8.42,4.7,3.5,4.77,8.39,5.43,12.65,1.9,12.16,4.32,24.34,3.43,36.7a12.35,12.35,0,0,1-2,6.56c-3.92,5.8-5.94,12.22-5.35,18.93.34,3.72-1,6.91-3.25,9.93-1.69,2.29-3.29,4.48-3.16,7.37.42,9.24-2.54,18.17-4.3,27.2-1.08,5.52-2.19,10.52,1,16.09,4.19,7.36,3.91,15.75.89,23.15-2.53,6.21-2.35,11.41.9,17,1.22,2.07,2.81,4.15,2.56,6.48-1.14,10.47,2.32,20.69,2.31,31.12,0,4.72,3,8.74,8.26,11.23,6.64,3.15,11,9.81,9.43,14.69-1.67,5.2-3.77,10.33-5.16,15.58-1.71,6.42-2.36,13.06-4.43,19.39-1.71,5.2-4.14,10.25-5,15.6-1.59,9.32-1.17,18.71-1.06,28.08.07,5.77-.46,11.53.91,17.31a111.59,111.59,0,0,1,3.36,19.85c.23,4.34-.9,7.82-5.35,10.39a11.74,11.74,0,0,0-6,9.07c-.4,6.79-2,13.55-1.67,20.29a15.51,15.51,0,0,1-3.16,10.35c-2.67,3.67-8.87,1.54-8.46-2.88v-.1c.12-1.2.95-2.47-.16-3.44C528.7,794,524.58,787.51,518.24,791.76Z"
                />
                <path
                  className="map-blue-stroke"
                  d="M535.47,238.23s-49.57-44.83,0-66.87c0,0,58.51-18.24,45.51,42.55C581,213.91,578.54,266.35,535.47,238.23Z"
                />
                <path
                  className="map-blue-stroke"
                  d="M548.48,492s-191-136-251.11,44.08c0,0-50.38,61.55,43.07,114,0,0,123.52,78.27-66.63,175.54,0,0-168.22,103.35,0,88.91l201.53-31.92"
                />
                <path
                  className="map-blue-stroke"
                  d="M548.48,600.71s-65-19-65,173.26c0,0-30.88,24.32-17.88,60.8,0,0,30.07,39.51-3.25,62.31,0,0-2.44,30.4,27.63,25.84"
                />
                <path
                  className="map-blue-stroke"
                  d="M134.08,658.52c25.51,7.77,39.26,32.35,33.92,56.71-9.66,44.07-79.73,94.06-81.91,97.5C68.21,840.85,133.4,844.37,108.84,872c-13.46,15.15-51.91,9.3-69.07,7.6"
                />
              </g>
            </g>
          </svg>
          <p className="normal-text sea-text">הים התיכון</p>

          <div className="drop-cont">
            {currPart === 0
              ? Text[props.pageNum][`countrys`].map((name, index) => {
                  return (
                    <DropTarget
                      targetKey={`country${index}`}
                      key={index}
                      onHit={handleHit}
                    >
                      <div className={`drop drop-country drop-country${index}`}>
                        {data[index] === 1 ? (
                          <div
                            className={` drag-country${index} normal-text placed`}
                          >
                            {name}
                          </div>
                        ) : (
                          <div className={`placed`}></div>
                        )}
                      </div>
                    </DropTarget>
                  );
                })
              : Text[props.pageNum][`countrys`].map((name, index) => {
                  return (
                    <div
                      key={index}
                      className={`drop drop-country drop-country${index} normal-text placed small-country ${
                        index === 3 && "drop-country3-new"
                      } ${index === 1 && "drop-country1-new"}`}
                    >
                      {name}
                    </div>
                  );
                })}

            {currPart === 1 &&
              Text[props.pageNum][`citys`].map((name, index) => {
                return (
                  <div
                    key={index}
                    className={`drop-with-pin drop-with-pin${index}`}
                  >
                    <CityPlacment />
                    <DropTarget targetKey={`city${index}`} onHit={handleHit}>
                      <div className={`drop drop-city drop-city${index}`}>
                        {data[index] === 1 ? (
                          <div
                            className={` drag-city${index} normal-text placed city-placed`}
                          >
                            {name}
                          </div>
                        ) : (
                          <div className={`placed`}></div>
                        )}
                      </div>
                    </DropTarget>
                  </div>
                );
              })}
          </div>
          </div>

          <div className="drag-cont">
            {isNext ? (
              Text[props.pageNum][`${part[currPart]}s`].map((name, index) => {
                return (
                  <DragDropContainer
                    targetKey={`${part[currPart]}${index}`}
                    key={index}
                    dragData={{ name: { name }, index: { index } }}
                  >
                    <div
                      className={`drag normal-text drag-${part[currPart]} drag-${part[currPart]}${index} `}
                    >
                      {name}
                    </div>
                  </DragDropContainer>
                );
              })
            ) : (
              <div className="btn normal-text" onClick={nextBtn}>
                {" "}
                המשך
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default MapExer;
