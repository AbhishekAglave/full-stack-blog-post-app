import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    username: "",
    password: "",
  });

  const [confirm_password, setConfirm_password] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function setErrorMsg(error) {
    if (error.includes("Key (phone)") && error.includes("already exists")) {
      setError("Mobile number already exists");
    } else if (
      error.includes("Key (email)") &&
      error.includes("already exists")
    ) {
      setError("Email address already exists");
    } else if (
      error.includes("Key (username)") &&
      error.includes("already exists")
    ) {
      setError("Username already taken! please try different one");
    } else {
      setError("Something went wrong! Please try after sometime");
    }
  }
  function validate(event) {
    event.preventDefault();
    if (formData.password === confirm_password) {
      fetch("https://full-stack-blog-api.herokuapp.com/signup", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert(data.detail);
            navigate("/Login");
          } else {
            console.log(data.detail);
            setErrorMsg(data.detail);
          }
          console.log(data);
        });
    } else {
      setError("New password and Confirm password doesn't match");
    }
  }
  return (
    <>
      <h2>Create Account</h2>
      <form
        onSubmit={validate}
        onReset={() => navigate("/")}
        // action="http://localhost:8000/signup"
        method="POST"
      >
        <label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name*"
            onChange={(event) => {
              setFormData({
                first_name: event.target.value,
                last_name: formData.last_name,
                phone: formData.phone,
                email: formData.email,
                username: formData.username,
                password: formData.password,
              });
            }}
            value={formData.first_name}
            required
          />
        </label>

        <label>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            onChange={(event) => {
              setFormData({
                first_name: formData.first_name,
                last_name: event.target.value,
                phone: formData.phone,
                email: formData.email,
                username: formData.username,
                password: formData.password,
              });
            }}
            value={formData.last_name}
          />
        </label>

        <label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone*"
            onChange={(event) => {
              setFormData({
                first_name: formData.first_name,
                last_name: formData.last_name,
                phone: event.target.value,
                email: formData.email,
                username: formData.username,
                password: formData.password,
              });
            }}
            value={formData.phone}
            required
          />
        </label>

        <label>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            onChange={(event) => {
              setFormData({
                first_name: formData.first_name,
                last_name: formData.last_name,
                phone: formData.phone,
                email: event.target.value,
                username: formData.username,
                password: formData.password,
              });
            }}
            value={formData.email}
            required
          />
        </label>

        <label>
          <input
            type="text"
            name="username"
            placeholder="Create Username*"
            onChange={(event) => {
              setFormData({
                first_name: formData.first_name,
                last_name: formData.last_name,
                phone: formData.phone,
                email: formData.email,
                username: event.target.value,
                password: formData.password,
              });
            }}
            value={formData.username}
            required
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="New Password*"
            onChange={(event) => {
              setFormData({
                first_name: formData.first_name,
                last_name: formData.last_name,
                phone: formData.phone,
                email: formData.email,
                username: formData.username,
                password: event.target.value,
              });
            }}
            value={formData.password}
            required
          />
        </label>
        <label>
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password*"
            onChange={(event) => {
              setConfirm_password(event.target.value);
            }}
            value={confirm_password}
            required
          />
        </label>
        <div className="error_div">{error}</div>
        <div className="form_actions">
        <button type="submit">Sign up</button>
        <button type="reset">Cancel</button>
        </div>
      </form>
    </>
  );
}

export default Signup;
