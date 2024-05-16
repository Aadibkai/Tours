import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [flag, setFlag] = useState(false);

  //   useEffect(async () => {

  //   }, [flag]);

  function handleData(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    console.log(inputData)
    axios
      .post("http://localhost:3001/auth/SignUp", inputData)
      .then((res) => {
        console.log("res11", res);
      })
      .catch((err) => console.error(err));
  }

  // if (!inputData.name || !inputData.email || !inputData.password) {
  //   alert("All feild is mandatory");
  // } else {
  //   //   setFlag();
  //   console.log(768, inputData);
  //   axios
  //     .post("http://localhost:3001/auth/SignUp", inputData)
  //     .then((res) => {
  //       console.log("res11", res);
  //     })
  //     .catch((err) => console.error(err));
  // }
  //   }

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form>
        {action == "Sign Up" ? (
          <div className="input">
            <img src="./img/Person.png" alt="icon" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={inputData.name}
              onChange={handleData}
            />
          </div>
        ) : null}

        <div className="input">
          <img src="./img/email.png" alt="icon" />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={inputData.email}
            onChange={handleData}
          />
        </div>
        <div className="input">
          <img src="./img/password.png" alt="icon" />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          />
        </div>
        {action === "Log In" ? (
          <div className="forgot">
            Forgot Password <span>Click Here?</span>
          </div>
        ) : null}

        <div className="new">
          <button
            type="submit"
            className={action === "Sign Up" ? "submit" : "submit gray"}
            onClick={(e) => {
              e.preventDefault();
              if (action == "Sign Up") {
                handleSubmit();
              } else {
                setAction("Sign Up");
              }
            }}
          >
            Sign Up
          </button>

          <button
            className={action === "Log In" ? "submit" : "submit gray"}
            onClick={(e) => {
              e.preventDefault();

              if (action == "Log In") {
                handleSubmit();
              } else {
                setAction("Log In");
              }
            }}
          >
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
