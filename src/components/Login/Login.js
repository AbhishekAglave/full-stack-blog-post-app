import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function authenticate(event) {
    event.preventDefault();
    setError("wrong credentials");
  }
  return (
    <>
      <h2>Login</h2>
      <form
        onSubmit={authenticate}
        onReset={() => navigate("/")}
        action="https://full-stack-blog-api.herokuapp.com/login"
        method="POST"
      >
        <label>
          <input
            type="text"
            name="username"
            placeholder="Username*"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={username}
            required
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            placeholder="Password*"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
            required
          />
        </label>
        <div className="error_div">{error}</div>
        <div className="form_actions">
        <button type="submit">Login</button>
        <button type="reset">Cancel</button>
        </div>
      </form>
    </>
  );
}

export default Login;
