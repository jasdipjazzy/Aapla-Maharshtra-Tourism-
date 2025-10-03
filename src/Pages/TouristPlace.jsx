import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../cssfiles/hs.css"; // Reusing the Hill Station CSS for consistent styling
import "../cssfiles/loader.css";
import { db } from "../../firebase"; // Make sure path is correct
import { collection, query, where, getDocs } from "firebase/firestore";

const TouristPlace = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTouristPlaces = async () => {
      try {
        const q = query(collection(db, "tourist-places"), where("category", "==", "TouristPlace"));
        const querySnapshot = await getDocs(q);
        const tpData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPlaces(tpData);
      } catch (error) {
        console.error("Error fetching tourist places:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTouristPlaces();
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
        {places.map((place) => (
          <div key={place.id} className="hs-card">
            <Link to={`/tpdetails/${place.id}`}>
              <img
                src={place.image}
                alt={place.placename}
                className="hs-image"
              />
              <div className="hs-content">
                <h3>{place.placename}</h3>
                <p>{place.location}</p>
                <div className="hs-rating">{renderStars(place.rating)}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouristPlace;
