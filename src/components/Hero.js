import React, { useState, useEffect } from "react";
import "./Hero.css";
import HeroButton from "./HeroButton";
import { Link } from "react-router-dom";
import MainTitle from "./MainTitle";
function Hero() {
  const [mobile, setMobile] = useState(false);
  const toggleMobile = () => {
    if (window.innerWidth < 950) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };
  useEffect(() => {
    toggleMobile();
    window.addEventListener("resize", toggleMobile);
    return () => {
      window.removeEventListener("resize", toggleMobile);
    };
  }, []);
  return (
    <div className="hero-container">
      <MainTitle />
      <div className="hero-txt-wrap">
        <h1>Track your favorite products and get price updates in real time</h1>
        <div className="hero-button-wrap">
          {mobile ? (
            ""
          ) : (
            <a className="hb-link" href="#step1-wrap">
              <HeroButton text="Details" width="163px" />
            </a>
          )}

          <Link
            className="hb-link"
            to={
              sessionStorage.getItem("auth") === "true"
                ? "/your-tracker"
                : "/login-reg/create"
            }
          >
            <HeroButton
              text="Try It Yourself"
              width="293px"
              toggleArrow={true}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
