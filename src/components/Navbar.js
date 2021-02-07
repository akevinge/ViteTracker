import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import HeroButton from "./HeroButton";
function Navbar() {
  const [mobileClicked, setMobileClicked] = useState(false);
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1180) {
      setMobileClicked(false);
    }
  });
  const route = useLocation().pathname;

  useEffect(() => {
    setMobileClicked(false);
  }, [route]);
  return (
    <div className="nb-container">
      <ul className={mobileClicked ? "nb-list nb-list-slide" : "nb-list"}>
        <li className="nb-item">
          <NavLink className="nb-link " to="/">
            Home
          </NavLink>
        </li>

        <li className="nb-item">
          <NavLink
            className="nb-link"
            to={
              sessionStorage.getItem("auth") === "true"
                ? "/your-tracker"
                : "/login-reg"
            }
          >
            Tracking
          </NavLink>
        </li>
        <li className="nb-item">
          <NavLink
            to={
              sessionStorage.getItem("auth") === "true"
                ? "/your-tracker"
                : "/login-reg"
            }
            className="nb-link"
          >
            <HeroButton text="Sign Up" width="130px" height="30px" margin="0" />
          </NavLink>
        </li>
      </ul>
      <div
        onClick={() => {
          setMobileClicked(!mobileClicked);
        }}
        className={
          mobileClicked
            ? "nb-bars-slide nb-bars-container"
            : "nb-bars-container"
        }
      >
        <i className={mobileClicked ? " fas fa-times " : "fas fa-bars"} />
      </div>
    </div>
  );
}

export default Navbar;
