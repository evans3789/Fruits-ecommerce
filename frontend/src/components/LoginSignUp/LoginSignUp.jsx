import React from "react";
import "./LoginSignUp.css";
import LoginForm from "../loginForm/LoginForm";
const LoginSignUp = ({ setSignUp }) => {
  return (
    <div className="signup-container">
      <p onClick={() => setSignUp()} className="close">
        X
      </p>
      <h1>Sign In or Create an Account to</h1>
      <h1>
        <span>Get Started</span>
      </h1>
      <LoginForm />
    </div>
  );
};

export default LoginSignUp;
