import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });


  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]:e.target.value}
    })
  }
  return (
    <section className="login">
      <div className="container">
        <h2>Sign In</h2>
        <form action="" className="form login__form">
          <p className="form__error-message">This is an error message</p>
          <input
            type="text"
            name="email"
            placeholder="Email address"
            onChange={changeInputHandler}
            value={userData.email}
            autoFocus
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={changeInputHandler}
            value={userData.password}
          />
          <button type="submit" className="btn primary">Register</button>
        </form>
        <small>Don't have an account? <Link to='/register'>Sign Up</Link></small>
      </div>
    </section>
  );
};

export default LoginPage;
