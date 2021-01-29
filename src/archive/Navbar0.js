import React, { useState } from "react";
import "./Navbar0.css";
import { NavLink } from "react-router-dom";
// import NavButton from "./NavButton";
function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [mobileClick, setMobileClick] = useState(false);
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 1015) {
      setMobile(true);
    } else {
      setMobile(false);
      setMobileClick(false);
    }
  });
  return (
    <nav className="nb-container">
      <div className="nb-title-wrap">
        <h2 className="nb-main-title">Amazon Web Scanner</h2>
        <i />
      </div>
      <div
        className={
          mobileClick ? "nb-slidein nb-nav-container " : " nb-nav-container"
        }
      >
        <ul className="nb-list">
          <li className="nb-list-item">
            <NavLink className="nb-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nb-list-item">
            <NavLink className="nb-link" to="/">
              Your Products
            </NavLink>
          </li>
        </ul>
        {/* <NavButton text="Login" />
        <NavButton text="Sign Up" /> */}
      </div>
      <div
        className={
          mobileClick
            ? "nb-bars-container nb-bars-container-shift"
            : "nb-bars-container"
        }
      >
        <i
          onClick={() => {
            setMobileClick(!mobileClick);
            console.log(mobileClick);
          }}
          className={
            mobileClick ? "nb-times fas fa-times " : "nb-bars fas fa-bars"
          }
        />
      </div>
    </nav>
  );
}

export default Navbar;
