import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../cssfiles/AdminRegister.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; 

const AdminLogin = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!value.email || !value.password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      // This is the Firebase function to sign in
      await signInWithEmailAndPassword(auth, value.email, value.password);
      
      // *** THIS IS THE FIX ***
      // After a successful login, navigate to the admin's home page
      alert("Login Successful!");
      navigate("/datahome");

    } catch (err) {
      setError("Invalid email or password. Please try again.");
      console.error("Firebase login error:", err);
    }
  };

  return (
    <div id="loginFormContainer">
      <h2>Admin Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <div id="content">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter Email"
            required
            onChange={(e) => setValue({ ...value, email: e.target.value })}
          />
        </div>
        <div id="content">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            required
            onChange={(e) => setValue({ ...value, password: e.target.value })}
          />
        </div>
        <div id="buttons">
          <button type="submit" className="btn btn-success me-3">
            Submit
          </button>
          <Link to="/" className="btn btn-primary me-2">
            Back
          </Link>
        </div>
        <div className="register-link">
          <p>
            Don't have an account?{" "}
            <Link to="/adminregister">Register here</ Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;