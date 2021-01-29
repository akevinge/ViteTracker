import React, { useState } from "react";
import "./CreateAcc.css";
import { Link } from "react-router-dom";
function CreateAcc() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [passMis, setPassMis] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    let at = email.indexOf("@");
    setPassErr(false);
    setPassMis(false);
    setEmailErr(false);
    if (at === -1 || email.length - 1 === at || at === 0) {
      setEmailErr(true);
    }
    if (pass === "") {
      setPassErr(true);
    } else if (pass !== pass2) {
      setPassMis(true);
    } else {
    }

    // make api call

    console.log("fine");
  };
  return (
    <div className="ca-inner">
      <div className="ca-card">
        <h2>Create An Account</h2>
        <p>
          Already have an account?{" "}
          <Link className="ca-link" to="/login-reg">
            Sign in
          </Link>
        </p>
        <form className="ac-create-form">
          <h3>Email</h3>
          {emailErr ? (
            <span className="mismatch-pass-msg">*Invalid Email</span>
          ) : (
            ""
          )}
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
          />
          <h3>Password</h3>
          {passErr ? (
            <span className="mismatch-pass-msg">*Invalid Password</span>
          ) : (
            ""
          )}
          <input
            onChange={(e) => {
              setPass(e.target.value);
            }}
            type={showPass ? "test" : "password"}
          />

          <h3>Confirm Password</h3>
          {passMis ? (
            <span className="mismatch-pass-msg">*Passwords do not match</span>
          ) : (
            ""
          )}
          <input
            onChange={(e) => {
              setPass2(e.target.value);
            }}
            type={showPass ? "text" : "password"}
          />
          <div className="ac-show-pass-wrap">
            <input
              onChange={() => {
                setShowPass(!showPass);
              }}
              type="checkbox"
              className="ac-cb"
            />
            <span>Show Password</span>
          </div>

          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAcc;
