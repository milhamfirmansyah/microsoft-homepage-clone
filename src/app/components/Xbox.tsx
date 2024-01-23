import React from 'react';
import '../sass/xbox.css';
import '../sass/navbar.css';
import { BiChevronRight } from 'react-icons/bi';

function Xbox() {
  return (
    <section className="xbox">
      <div className="content">
        <h2>Xbox Game Pass Ultimate</h2>
        <p>Xbox Game Pass Ultimate Xbox Live Gold and over 100 high-quality console and PC games. Play together with friends and discover your next favorite game.</p>
        <a href="#" className="btn">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>Join Now</span>
            <BiChevronRight className="icon-size" />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Xbox;
