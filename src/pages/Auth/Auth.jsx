import React from "react";
import "./auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login, SignUp } from "../../Actions/Authaction";

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.AuthReducer.loading);

  const [isSignup, setisSignup] = useState(true);
  const [data, setdata] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmPass: "",
    username: "",
  });
  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    setconfirmPass(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      data.password === data.confirmPass
        ? dispatch(SignUp(data))
        : setconfirmPass(false);
    } else {
      dispatch(Login(data));
    }
  };
  const resetForm = () => {
    setconfirmPass(true);
    setdata({
      firstname: "",
      lastname: "",
      password: "",
      confirmPass: "",
      username: "",
    });
  };

  const [confirmPass, setconfirmPass] = useState(true);
  return (
    // left side
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Rezzit</h1>
          <h6>Everyone is Fit at Rezzit</h6>
        </div>
      </div>
      {/* Right side */}
      <div className="Formbox">
        <div className="a-right">
          <form
            action=""
            className={`infoForm authForm ${!isSignup && "loginwidther"} `}
          >
            <h3> {isSignup ? "SignUp" : "Login"} </h3>
            {isSignup && (
              <div>
                <input
                  type="text"
                  required={true}
                  className="infoInput"
                  placeholder="First Name"
                  name="firstname"
                  onChange={handleChange}
                  value={data.firstname}
                />
                <input
                  type="text"
                  className="infoInput"
                  required={true}
                  placeholder="Last Name"
                  name="lastname"
                  onChange={handleChange}
                  value={data.lastname}
                />
              </div>
            )}

            <div>
              <input
                type="text"
                required={true}
                className="infoInput"
                placeholder="Username"
                name="username"
                onChange={handleChange}
                value={data.username}
              />
            </div>
            <div>
              <input
                type="password"
                required={true}
                name="password"
                className="infoInput"
                placeholder="Password"
                onChange={handleChange}
                value={data.password}
              />
              {isSignup && (
                <input
                  type="password"
                  required={true}
                  name="confirmPass"
                  className="infoInput"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={data.confirmPass}
                />
              )}
            </div>
            <span
              style={{
                display: confirmPass ? "none" : "block",
                fontSize: "12px",
                color: "red",
                alignSelf: "flex-end",
                marginRight: "5px",
              }}
            >
              * Passwords are not Matching
            </span>
            <div>
              <span style={{ fontSize: "12px" }}>
                {isSignup
                  ? "Already have an Account ?"
                  : "Don't Have an Account ?"}{" "}
                <span
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setisSignup(!isSignup);
                    resetForm();
                  }}
                >
                  {isSignup ? "Login" : "Signup"}
                </span>
              </span>
            </div>
            <button
              type="submit "
              className="button infoButton"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Loading" : isSignup ? "SignUp" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
