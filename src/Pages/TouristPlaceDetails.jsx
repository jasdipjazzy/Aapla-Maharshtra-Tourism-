import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../cssfiles/hsdetails.css";
import data from "../../Backend/data.json";

const TouristPlaceDetails = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataArray = Array.isArray(data) ? data : [];
    const foundPlace = dataArray.find((p) => p.id === id);
    setPlace(foundPlace);
    setLoading(false);
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

export default TouristPlaceDetails;
