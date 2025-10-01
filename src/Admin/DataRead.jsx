import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Make sure this path is correct

const DataRead = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    const fetchPlace = async () => {
      const docRef = doc(db, "tourist-places", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPlace(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchPlace();
  }, [id]);

  if (!place) {
    return <h3 style={{ textAlign: "center", marginTop: "20px" }}>Loading...</h3>;
  }

  return (
    <div style={{ maxWidth: "800px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{place.placename}</h2>

      {place.image && (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src={place.image}
            alt={place.placename}
            style={{ maxWidth: "100%", height: "auto", maxHeight: "400px", borderRadius: "10px" }}
          />
        </div>
      )}
      <p><strong>Description:</strong> {place.description}</p>
      <p><strong>Location:</strong> {place.location}</p>
      <p><strong>Best Time:</strong> {place.best_time}</p>
      <p><strong>Rating:</strong> ⭐ {place.rating} / 5</p>
      <p><strong>Category:</strong> {place.category}</p>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to={`/dataupdate/${id}`} className="btn btn-success me-3">
          Edit
        </Link>
        <Link to="/datahome" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default DataRead;