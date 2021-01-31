import React from "react";
import CreateAcc from "../components/CreateAcc";
import LoginCard from "../components/LoginCard";
import MainTitle from "../components/MainTitle";
function LoginReg({ toggleCreate }) {
  return (
    <div className="loginreg-container">
      <MainTitle color="#5b03ff" />
      {toggleCreate ? <CreateAcc /> : <LoginCard />}
    </div>
  );
}

export default LoginReg;
