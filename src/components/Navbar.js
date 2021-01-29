import React, { useState, useEffect, useContext } from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../UserContext";
function Navbar() {
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  const [homeBorder, setHomeBorder] = useState(false);
  const [productsBorder, setProductsBorder] = useState(false);
  const [detailsBorder, setDetailsBorder] = useState(false);
  const [mobileClicked, setMobileClicked] = useState(false);
  const route = useLocation().pathname;
  useEffect(() => {
    checkRoute();
  }, [route]);
  const checkRoute = () => {
    switch (route) {
      case "/your-products":
        setHomeBorder(false);
        setProductsBorder(true);
        setDetailsBorder(false);
        break;
      case "/details":
        setHomeBorder(false);
        setProductsBorder(false);
        setDetailsBorder(true);
        break;
      default:
        setHomeBorder(true);
        setProductsBorder(false);
        setDetailsBorder(false);
    }
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1180) {
      setMobileClicked(false);
    }
  });
  return (
    <nav className="nb-container">
      <ul className={mobileClicked ? "nb-list nb-list-slide" : "nb-list"}>
        <li className={homeBorder ? "nb-link-border nb-item" : "nb-item"}>
          <NavLink className="nb-link " to="/">
            HOME
          </NavLink>
        </li>
        <li className={detailsBorder ? "nb-link-border nb-item" : "nb-item"}>
          <NavLink className="nb-link" to="/details">
            DETAILS
          </NavLink>
        </li>
        <li className={productsBorder ? "nb-link-border nb-item" : "nb-item"}>
          <NavLink
            className="nb-link"
            to={loggedIn ? "/your-tracker" : "/login-reg"}
          >
            YOUR TRACKER
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
    </nav>
  );
}

export default Navbar;
