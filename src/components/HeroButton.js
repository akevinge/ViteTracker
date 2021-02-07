import React from "react";
import "./HeroButton.css";

function HeroButton({ text, width, height, toggleArrow, margin }) {
  return (
    <div
      style={{ width: width, height: height, margin: margin }}
      className="hb-container"
    >
      <span>{text}</span>
      {toggleArrow ? (
        <svg
          className="hb-arrow"
          width="34"
          height="25"
          viewBox="0 0 34 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4688 25L0 0L16.4688 17.2222L34 0L16.4688 25Z"
            fill="#7DE8E8"
          />
        </svg>
      ) : (
        ""
      )}
    </div>
  );
}

export default HeroButton;
