import React, { useState, useContext } from "react";
import "./LoginCard.css";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../UserContext";
function LoginCard() {
  const [loggedIn, setLoggedIn] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [valid, setValid] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // api cal
    let resp = true;
    if (resp) {
      setValid(true);
    }
  };
  return (
    <>
      {valid ? <Redirect to="/" /> : ""}
      <div className="lc-inner">
        <div className="lc-card">
          <h2>Login</h2>
          <p>
            New to ViteTracker?{" "}
            <Link className="lc-link" to="/login-reg/create">
              Sign Up
            </Link>
          </p>
          <form className="lc-login-form">
            <h3>Email</h3>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
            />
            <h3>Password</h3>
            <input
              onChange={(e) => {
                setPass(e.target.value);
              }}
              type="text"
            />
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginCard;
