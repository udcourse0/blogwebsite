import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });


  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]:e.target.value}
    })
  }
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form action="" className="form register__form">
          <p className="form__error-message">This is an error message</p>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={changeInputHandler}
            value={userData.name}
            autoFocus
          />
          <input
            type="text"
            name="email"
            placeholder="Email address"
            onChange={changeInputHandler}
            value={userData.email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={changeInputHandler}
            value={userData.password}
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            onChange={changeInputHandler}
            value={userData.password2}
          />
          <button type="submit" className="btn primary">Register</button>
        </form>
        <small>Already have an account? <Link to='/login'>Sign in</Link></small>
      </div>
    </section>
  );
};

export default Register;
