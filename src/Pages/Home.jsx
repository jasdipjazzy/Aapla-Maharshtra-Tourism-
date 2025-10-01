import React from 'react';
import { Link } from 'react-router-dom';
import '../cssfiles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-hero">
        <div className="hero-video-background">
          <video src="src/assets/maharsthra.mp4" loop autoPlay playsInline></video>
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
          <span>Pune</span>
          <span>•</span>
          <span>Mumbai</span>
          <span>•</span>
          <span>Mahabaleshwar</span>
          <span>•</span>
          <span>Lonavala</span>
          <span>•</span>
          <span>Nashik</span>
          <span>•</span>
          <span>Aurangabad</span>
          <span>•</span>
          <span>Tarkarli</span>
          <span>•</span>
          <span>Kolhapur</span>
          <span>Pune</span>
          <span>•</span>
          <span>Mumbai</span>
          <span>•</span>
          <span>Mahabaleshwar</span>
          <span>•</span>
          <span>Lonavala</span>
        </div>
      </div>

      <section className="home-section categories-section">
        <h2>Explore by Category</h2>
        <div className="category-cards">
          {/* --- ADDED MISSING HILL STATION IMAGE --- */}
          <Link to="/hillstation" className="category-card">
            <img src="src/assets/hill station.jpg" alt="Hill Stations" />
            <div className="card-overlay">
              <h3>Hill Stations</h3>
            </div>
          </Link>
          <Link to="/beaches" className="category-card">
            <img src="https://images.unsplash.com/photo-1509233725247-49e657c54213?w=800&q=80" alt="Beaches" />
            <div className="card-overlay">
              <h3>Beaches</h3>
            </div>
          </Link>
          {/* --- ADDED MISSING TEMPLE IMAGE --- */}
          <Link to="/temples" className="category-card">
            <img src="src/assets/temple-975324.jpg" alt="Temples" />
            <div className="card-overlay">
              <h3>Temples</h3>
            </div>
          </Link>
        </div>
      </section>

      <section className="home-section featured-section">
        <div className="featured-content">
          <div className="featured-image">
            <img src="src/assets/sunrise-653199.jpg" alt="Mahabaleshwar" />
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