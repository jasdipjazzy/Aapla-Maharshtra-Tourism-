// FULL, CORRECTED Home.jsx code is provided here for brevity...
// (Paste the full Home.jsx code from my previous message here if needed)
import React from 'react';
import { Link } from 'react-router-dom';
import '../cssfiles/Home.css';

const Home = () => {
  const publicUrl = import.meta.env.BASE_URL;

  return (
    <div className="home-container">
      <header className="home-hero">
        <div className="hero-video-background">
          <video autoPlay loop muted playsInline>
            <source src={`${publicUrl}images/maharsthra.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Aapla Maharashtra</h1>
            <p>The Land of Unlimited Adventures</p>
            <Link to="/gallery" className="hero-button">Start Exploring</Link>
          </div>
        </div>
      </header>
      
      <div className="marquee">
        <div className="marquee-content">
          <span>Pune</span> <span>•</span> <span>Mumbai</span> <span>•</span> <span>Mahabaleshwar</span> <span>•</span> <span>Lonavala</span> <span>•</span> <span>Nashik</span> <span>•</span> <span>Aurangabad</span> <span>•</span> <span>Tarkarli</span> <span>•</span> <span>Kolhapur</span>
          <span>Pune</span> <span>•</span> <span>Mumbai</span> <span>•</span> <span>Mahabaleshwar</span> <span>•</span> <span>Lonavala</span>
        </div>
      </div>

      <section className="home-section categories-section">
        <h2>Explore by Category</h2>
        <div className="category-cards">
          <Link to="/hillstation" className="category-card">
            <img src={`${publicUrl}images/hill station.jpg`} alt="Hill Stations" />
            <div className="card-overlay">
              <h3>Hill Stations</h3>
            </div>
          </Link>
          <Link to="/beaches" className="category-card">
            <img src={`${publicUrl}images/sunrise-653199.jpg`} alt="Beaches" />
            <div className="card-overlay">
              <h3>Beaches</h3>
            </div>
          </Link>
          <Link to="/temples" className="category-card">
            <img src={`${publicUrl}images/temple-975324.jpg`} alt="Temples" />
            <div className="card-overlay">
              <h3>Temples</h3>
            </div>
          </Link>
        </div>
      </section>

      <section className="home-section featured-section">
        <div className="featured-content">
          <div className="featured-image">
            <img src="https://images.unsplash.com/photo-1605275519148-93680234a742?w=800&q=80" alt="Mahabaleshwar" />
          </div>
          <div className="featured-text">
            <h2>Featured Destination: Mahabaleshwar</h2>
            <p>
              Nestled in the Sahyadri mountain range, Mahabaleshwar is a breathtaking plateau known for its lush evergreen forests, cascading waterfalls, and serene lakes. It's the perfect escape for nature lovers and adventure seekers alike.
            </p>
            <Link to="/gallery" className="hero-button">Discover More</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;