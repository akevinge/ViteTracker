import React from "react";
import "./LoadingPage.css";
import svg from "../images/loader.svg";

export default function LoadingPage() {
  return (
    <div className="loadingpage-wrap">
      <img className="loader-svg" src={svg} alt="Loading" />
    </div>
  );
}
