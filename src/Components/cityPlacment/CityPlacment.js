import React from "react";
import "./CityPlacment.css";

function CityPlacment() {
  return (
    // <div className="city-placment-cont">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.04 40.66" className="pin">
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1">
            <path
              className="pin-border"
              d="M16,37.06h0c6.86,0,12.42-14.18,12.42-21A12.42,12.42,0,0,0,3.6,16c0,6.86,5.56,21,12.42,21h0C9.16,37.06,3.6,22.88,3.6,16a12.42,12.42,0,0,1,24.84,0c0,6.86-5.56,21-12.42,21Z"
            />
            <path
              className="pin-border"
              d="M16,38.7c-3.69,0-7.33-3.14-10.24-8.85C3.5,25.38,2,19.82,2,16a14.06,14.06,0,1,1,28.11,0c0,3.8-1.53,9.36-3.81,13.83C23.35,35.56,19.71,38.7,16,38.7Z"
            />
            <path
              className="pin-circle"
              d="M16,21.54h0A5.52,5.52,0,1,0,10.5,16,5.52,5.52,0,0,0,16,21.54h0A5.52,5.52,0,1,1,21.54,16,5.52,5.52,0,0,1,16,21.54Z"
            />
          </g>
        </g>
      </svg>
    // </div>
  );
}

export default CityPlacment;
