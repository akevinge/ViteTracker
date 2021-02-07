import React, { useState, useEffect } from "react";
import "./LoginCard.css";
import { Link, Redirect } from "react-router-dom";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [valid, setValid] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");

  // email, pass
  const handleSubmit = async (e) => {
    e.preventDefault();
    let at = email.indexOf("@");
    setEmailErr(false);
    setPassErr(false);
    if (at === -1 || email.length - 1 === at || at === 0) {
      setEmailErr("invalid");
    } else if (pass === "") {
      setPassErr("invalid");
    } else {
      const response = await fetch("http://localhost:5001/account/login", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: pass,
        }),
      }).then((resp) => {
        return resp.json();
      });
      if (response.status === "valid") {
        sessionStorage.setItem("userId", response._id);
        sessionStorage.setItem("auth", true);
        const resp = await fetch("http://localhost:5001/amazon/list", {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            _id: response._id,
          }),
        }).then((response) => {
          return response.json();
        });
        sessionStorage.setItem(
          "amazon-list",
          JSON.stringify({ "amazon-list": resp.amazon })
        );
        setValid(true);
      } else if (response.status === "email-invalid") {
        console.log("hi");
        setEmailErr("incorrect");
      } else if (response.status === "pass-invalid") {
        setPassErr("incorrect");
      }
    }
  };

  return (
    <>
      {valid ? <Redirect to="/your-tracker" /> : ""}
      <div className="lc-inner">
        <div className="lc-card">
          <h2>Login</h2>
          <p>
            New to ViteTracker?
            <Link className="lc-link" to="/login-reg/create">
              Sign Up
            </Link>
          </p>
          <form className="lc-login-form">
            <h3>Email</h3>
            {emailErr === "invalid" ? (
              <span className="lc-err-msg">*Invalid Email</span>
            ) : emailErr === "incorrect" ? (
              <span className="lc-err-msg">*Incorrect Email</span>
            ) : (
              ""
            )}
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
            />
            <h3>Password</h3>
            {passErr === "invalid" ? (
              <span className="lc-err-msg">*Invalid Password</span>
            ) : passErr === "incorrect" ? (
              <span className="lc-err-msg">*Incorrect Password</span>
            ) : (
              ""
            )}
            <input
              onChange={(e) => {
                setPass(e.target.value);
              }}
              type={showPass ? "text" : "password"}
            />
            <div className="lc-show-pass-wrap">
              <input
                onChange={() => {
                  setShowPass(!showPass);
                }}
                type="checkbox"
                className="lc-cb"
              />
              <span>Show Password</span>
            </div>
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
