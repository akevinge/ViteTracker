import React, { useState } from "react";
import "./LoginCard.css";
import { Link, Redirect } from "react-router-dom";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [valid, setValid] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    sessionStorage.setItem("auth", true);
    console.log("submitted");
    const resp = await fetch("http://localhost:5001/account/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    })
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        if (json.status === "valid") {
          setValid(true);
          sessionStorage.setItem("userId", json._id);
          sessionStorage.setItem("auth", true);
        }
      });
  };
  return (
    <>
      {valid ? <Redirect to="/your-tracker" /> : ""}
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
