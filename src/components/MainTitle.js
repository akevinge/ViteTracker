import React from "react";
import { Link } from "react-router-dom";
import "./MainTitle.css";

export default function MainTitle({ color, fontsize }) {
  return (
    <div>
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="hero-main-wrap">
          <h3 style={{ color: color, fontSize: fontsize }}>ViteTracker</h3>
        </div>
      </Link>
    </div>
  );
}
