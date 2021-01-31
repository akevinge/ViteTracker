import React from "react";
import "./Hero.css";
import HeroButton from "./HeroButton";
import { Link } from "react-router-dom";
import MainTitle from "./MainTitle";
function Hero() {
  return (
    <div className="hero-container">
      <MainTitle />
      <div className="hero-txt-wrap">
        <h1>Shop Smarter</h1>
        <h3>
          ViteTracker tracks the prices of your favorite products and updates
          you in real time
        </h3>
        <Link
          className="hb-link"
          to={
            sessionStorage.getItem("auth") === "true"
              ? "/your-tracker"
              : "/login-reg/create"
          }
        >
          <HeroButton text="GET STARTED" width="180px" />
        </Link>
        <Link className="hb-link" to="/details">
          <HeroButton text="DETAILS" width="150px" />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
