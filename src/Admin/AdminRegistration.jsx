import React, { useState } from "react";
import "../cssfiles/AdminRegister.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase"; // Make sure this path is correct

const AdminRegisteration = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    contact: ""
  });
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    if (!value.email || !value.password) {
      setError("Email and Password cannot be empty.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, value.email, value.password);
      console.log("New admin registered:", userCredential.user);
      alert("Registration successful!");
      navigate("/adminlogin");
    } catch (err) {
      setError(err.message);
      console.error("Firebase registration error:", err);
    }
  };

  return (
    <div id="formContainer">
      <h2>Admin Registration</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div id="content">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setValue({ ...value, name: e.target.value })}
          />
        </div>
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
        <div id="content">
          <label>Contact:</label>
          <input
            type="text"
            placeholder="Enter Contact"
            onChange={(e) => setValue({ ...value, contact: e.target.value })}
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
      </form>
    </div>
  );
};

export default AdminRegisteration;