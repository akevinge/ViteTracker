import React from "react";
import "./HeroButton.css";

function HeroButton({ text, width }) {
  return (
    <div style={{ width: width }} className="hb-container">
      <span>{text}</span>
    </div>
  );
}

export default HeroButton;
