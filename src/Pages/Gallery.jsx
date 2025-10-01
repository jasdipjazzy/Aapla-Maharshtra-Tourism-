import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../cssfiles/hs.css";
import "../cssfiles/loader.css";
import { db } from "../../firebase"; // Make sure path is correct
import { collection, getDocs } from "firebase/firestore";

const Gallery = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllPlaces = async () => {
      const querySnapshot = await getDocs(collection(db, "tourist-places"));
      const allData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPlaces(allData);
      setLoading(false);
    };

    fetchAllPlaces();
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
    <div className="hs-container">
      <div className="hs-grid">
        {places.map((v) => (
          <div key={v.id} className="hs-card">
            <Link to={`/gallerydetails/${v.id}`}>
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

export default Gallery;