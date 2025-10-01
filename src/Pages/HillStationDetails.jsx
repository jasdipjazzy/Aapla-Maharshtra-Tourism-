import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../cssfiles/hsdetails.css";
import { db } from "../../firebase"; 
import { doc, getDoc } from "firebase/firestore";

const HillStationDetails = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlace = async () => {
      const docRef = doc(db, "tourist-places", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPlace(docSnap.data());
      } else {
        console.log("No such document!");
      }
      setLoading(false);
    };

    fetchPlace();
  }, [id]);

  if (loading) return <div className="loader"></div>;
  if (!place) return <div>No details found!</div>;

  return (
    <div className="details-container">
      <h1>{place.placename}</h1>
      <img src={place.image} alt={place.placename} className="details-image" />
      <p><strong>Description:</strong> {place.description}</p>
      <p><strong>Location:</strong> {place.location}</p>
      <p><strong>Best Time:</strong> {place.best_time}</p>
      <p><strong>Category:</strong> {place.category}</p>
      <p><strong>Rating:</strong> {place.rating} / 5</p>
    </div>
  );
};

export default HillStationDetails;