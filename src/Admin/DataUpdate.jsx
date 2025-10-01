import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Make sure this path is correct

const DataUpdate = () => {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchPlace = async () => {
      const docRef = doc(db, "tourist-places", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setValue(docSnap.data());
      }
    };
    fetchPlace();
  }, [id]);

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
    const docRef = doc(db, "tourist-places", id);
    try {
      await updateDoc(docRef, value);
      alert("Data updated successfully!");
      navigate("/datahome");
    } catch (error) {
      console.error("Error updating document: ", error);
      alert("Failed to update data.");
    }
  };

  return (
    <div id="formContainer">
      <h2>Edit Tourist Place</h2>
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
            {value.image && <img src={value.image} alt="Preview" width="100" className="mt-2"/>}
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
                Update
            </button>
            <Link to="/datahome" className="btn btn-primary">
                Cancel
            </Link>
        </div>
      </form>
    </div>
  );
};

export default DataUpdate;