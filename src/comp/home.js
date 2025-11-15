// src/components/Home.jsx
import React from 'react';
import './home.css';

function Home() {
  return (
    <div className="home-container">
      
      <section className="description">
        <h2>Welcome to Cloud Kitchen</h2>
        <p>Delicious homemade meals delivered to your door. We offer a variety of dishes made with love and the finest ingredients.</p>
      </section>
      <section className="poster-section">
     <img src="/images/c5d431d2-db10-4d68-ab32-c9848b50ba15.jpg" alt="Diwali special" className="poster-img" />
     <img src="/images/poster3.jpg" alt="Menu Poster" className="poster-img" />
     <img src="/images/menu.jpeg" alt="Menu Poster" className="poster-img" />
     <img src="/images/poster4.jpg" alt="Menu Poster" className="poster-img" />
     <img src="/images/poster5.jpg" alt="Menu Poster" className="poster-img" />
     

      </section>
    </div>
  );
}

export default Home;
