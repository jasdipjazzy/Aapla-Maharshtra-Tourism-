import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Make sure this path is correct

const DataCreate = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    placename: "",
    description: "",
    image: "",
    location: "",
    best_time: "",
    rating: "",
    category: ""
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setValue({ ...value, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value.placename || !value.category) {
        alert("Place Name and Category are required!");
        return;
    }

    try {
      await addDoc(collection(db, "tourist-places"), value);
      alert("Data saved successfully!");
      navigate("/datahome");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to save data.");
    }
  };

  return (
    <div id="formContainer">
      <h2>Add Tourist Place</h2>
      <form onSubmit={handleSubmit}>
        <div id="content">
          <label>Place Name:</label>
          <input
            type="text"
            required
            value={value.placename}
            onChange={(e) => setValue({ ...value, placename: e.target.value })}
          />
        </div>
        <div id="content">
          <label>Description:</label>
          <textarea
            rows="4"
            value={value.description}
            onChange={(e) => setValue({ ...value, description: e.target.value })}
          />
        </div>
        <div id="content">
          <label>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
          />
        </div>
        <div id="content">
          <label>Location:</label>
          <input
            type="text"
            value={value.location}
            onChange={(e) => setValue({ ...value, location: e.target.value })}
          />
        </div>
        <div id="content">
          <label>Best Time:</label>
          <input
            type="text"
            value={value.best_time}
            onChange={(e) => setValue({ ...value, best_time: e.target.value })}
          />
        </div>
        <div id="content">
          <label>Rating:</label>
          <input
            type="number"
            min="1"
            max="5"
            step="0.1"
            value={value.rating}
            onChange={(e) => setValue({ ...value, rating: e.target.value })}
          />
        </div>
        <div id="content">
          <label>Category:</label>
          <select
            required
            value={value.category}
            onChange={(e) => setValue({ ...value, category: e.target.value })}
          >
            <option value="">Select Category</option>
            <option value="HillStation">Hill Station</option>
            <option value="Beach">Beach</option>
            <option value="Temple">Temple</option>
            <option value="Gallery">Gallery</option>
            <option value="TouristPlace">Tourist Place</option>
          </select>
        </div>
        <div id="buttons">
          <button type="submit" className="btn btn-success me-3">
            Save
          </button>
          <Link to="/datahome" className="btn btn-primary">
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default DataCreate;