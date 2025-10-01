import React from 'react';
import '../cssfiles/About.css'; // We will create this CSS file next

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Aapla Maharashtra</h1>
        <p>
          "Aapla Maharashtra" is a passion project dedicated to showcasing the breathtaking beauty and cultural diversity of Maharashtra. Our mission is to provide a comprehensive and immersive guide for travelers, explorers, and anyone curious about this incredible state.
        </p>
        <p>
          We believe that travel is more than just visiting a place; it's about experiencing its soul. Through our curated galleries and detailed information on hill stations, beaches, temples, and more, we aim to inspire you to embark on your own Maharashtrian adventure.
        </p>
        <p>
          This platform is built with the latest technology to ensure a seamless and engaging user experience. Whether you're planning your next trip or simply exploring from home, we're glad to have you with us.
        </p>
      </div>
    </div>
  );
};

export default About;