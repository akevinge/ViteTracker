import React from "react";
import "./Details.css";

export default function Details() {
  return (
    <div className="details-container">
      <div id="step1-wrap" className="steps-wrap">
        <div className="steps-title">
          <div className="steps-btn">
            <span className="steps-txt">1</span>
          </div>
          <h3>Copy and Paste</h3>
        </div>
        <div className="d-search-bar">
          <i className="fas fa-search d-search-i" />
        </div>
      </div>

      <div id="step2-wrap" className="steps-wrap">
        <div className="steps-title">
          <div className="steps-btn">
            <span className="steps-txt">2</span>
          </div>
          <h3>Start Tracking</h3>
        </div>
      </div>
    </div>
  );
}
