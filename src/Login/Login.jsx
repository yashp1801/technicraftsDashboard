import "./Login.css";
import { useState } from "react";
import Img from "./Images/Technicrafts.png";
import logo from "./Images/logo.png";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="login">
      <div className="login__container">
        <span>Welcome to</span>
        <div className="login__logo">
          <img src={logo} alt="" className="login__logo__img1" />
          <img src={Img} alt="logo" className="login__logo__img2" />
        </div>
        <p>Where knowledge meets Innovation!</p>
        <form className="login__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <Link
            to={props.currentUserType === "admin" ? "/admin" : "/user"}
            className="loginBtn"
          >
            Continue
          </Link>
        </form>
        <a href="#">Forgot Password</a>
      </div>
    </div>
  );
};

export default Login;
