import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../cssfiles/Beaches.css";
import "../cssfiles/loader.css";
import { db } from "../../firebase"; // Make sure path is correct
import { collection, query, where, getDocs } from "firebase/firestore";

const Beaches = () => {
  const [beaches, setBeaches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeaches = async () => {
      const q = query(collection(db, "tourist-places"), where("category", "==", "Beach"));
      const querySnapshot = await getDocs(q);
      const beachesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBeaches(beachesData);
      setLoading(false);
    };

    fetchBeaches();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;
    for (let i = 1; i <= maxStars; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "star filled" : "star"}>
          ★
        </span>
      );
    }
    return stars;
  };

  if (loading) return <div className="loader"></div>;

  return (
    <div className="beache-container">
      <h1 className="title">Beautiful Beaches</h1>
      <div className="beache-grid">
        {beaches.map((beach) => (
          <div key={beach.id} className="beache-card">
            {beach.image && (
              <img
                src={beach.image}
                alt={beach.placename}
                className="beache-image"
              />
            )}
            <div className="beache-content">
              <h3>{beach.placename}</h3>
              <p>{beach.location}</p>
              <div className="beache-rating">{renderStars(beach.rating)}</div>
              <Link to={`/beachdetails/${beach.id}`} className="details-button">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beaches;