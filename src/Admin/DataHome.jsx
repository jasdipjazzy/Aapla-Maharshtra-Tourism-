import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc, addDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { db, auth } from "../../firebase";
import localData from "../../Backend/data.json"; // Import your local JSON data

const DataHome = () => {
  const [places, setPlaces] = useState([]);
  const navigate = useNavigate();

  // This function will upload all data from your local JSON file
  const handleUpload = async () => {
    const dataToUpload = localData.data; // Access the array inside your JSON
    const collectionRef = collection(db, "tourist-places");
    
    alert(`Starting upload of ${dataToUpload.length} items. This may take a moment. Check the console for progress.`);
    
    for (const item of dataToUpload) {
      try {
        const { id, ...data } = item; // Remove the old ID
        await addDoc(collectionRef, data);
        console.log(`Successfully added: ${data.placename}`);
      } catch (error) {
        console.error(`Error adding ${item.placename}:`, error);
      }
    }
    
    alert("Data upload complete! Please refresh the page to see the new data.");
    fetchPlaces(); // Refresh the table after upload
  };

  const fetchPlaces = async () => {
    const placesCollection = collection(db, "tourist-places");
    const placesSnapshot = await getDocs(placesCollection);
    const placesList = placesSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setPlaces(placesList);
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  const handleDelete = async (id) => {
    const agree = window.confirm("Are you sure you want to delete this?");
    if (agree) {
      try {
        await deleteDoc(doc(db, "tourist-places", id));
        setPlaces(places.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      navigate("/adminlogin");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div id="container" className="p-3">
      <h2>Tourist Places</h2>
      <div className="d-flex justify-content-end mb-3">
        {/* --- TEMPORARY UPLOAD BUTTON --- */}
        <button className="btn btn-warning me-3" onClick={handleUpload}>
          UPLOAD ALL DATA
        </button>
        <button className="btn btn-danger me-2" onClick={handleLogout}>Logout</button>
        <Link to="/datacreate" className="btn btn-success">
          Add +
        </Link>
      </div>
      <table className="table table-striped table-bordered align-middle">
        <thead className="table-dark">
          <tr>
            <th>Place Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Location</th>
            <th>Best Time</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {places.map((place, i) => (
            <tr key={i}>
              <td>{place.placename}</td>
              <td style={{ maxWidth: "200px" }}>{place.description}</td>
              <td>
                {place.image ? (
                  <img
                    src={place.image}
                    alt={place.placename}
                    width="80"
                    height="60"
                    style={{ objectFit: "cover", borderRadius: "6px" }}
                  />
                ) : (
                  "No Image"
                )}
              </td>
              <td>{place.location}</td>
              <td>{place.best_time}</td>
              <td>{place.rating}</td>
              <td>{place.category}</td>
              <td>
                <Link
                  to={`/dataread/${place.id}`}
                  className="btn btn-primary btn-sm me-2"
                >
                  Read
                </Link>
                <Link
                  to={`/dataupdate/${place.id}`}
                  className="btn btn-success btn-sm me-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(place.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataHome;