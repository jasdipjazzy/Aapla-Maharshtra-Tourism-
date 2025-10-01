import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../cssfiles/hs.css";
import "../cssfiles/loader.css";
import { db } from "../../firebase"; // Make sure path is correct
import { collection, query, where, getDocs } from "firebase/firestore";

const TouristPlace = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaces = async () => {
      const q = query(collection(db, "tourist-places"), where("category", "==", "TouristPlace"));
      const querySnapshot = await getDocs(q);
      const placesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPlaces(placesData);
      setLoading(false);
    };

    fetchPlaces();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
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
    <div className="hs-container">
      <h1 className="title">Tourist Places</h1>
      <div className="hs-grid">
        {places.map((v) => (
          <div key={v.id} className="hs-card">
            <Link to={`/tpdetails/${v.id}`}>
              <img
                src={v.image}
                alt={v.placename}
                className="hs-image"
              />
              <div className="hs-content">
                <h3>{v.placename}</h3>
                <p>{v.location}</p>
                <div className="hs-rating">{renderStars(v.rating)}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouristPlace;