import React from 'react';
import '../sass/showcase.css';
import '../globals.css';
import { BiChevronRight } from 'react-icons/bi';

function Showcase() {
  return (
    <>
      <header className="showcase">
        <h2>Surface Deals</h2>
        <p>Select Surfaces are on sale now - save while supplies last</p>
        <a href="#" className="btn" style={{ display: 'flex', alignItems: 'center' }}>
          <span>Shop Now</span>
          <BiChevronRight className="icon-size" />
        </a>
      </header>

      <section className="home-cards">
        <div>
          <img src="https://i.ibb.co/LZPVKq9/card1.png" alt="" />
          <h3>New Surface Pro 7</h3>
          <p>See how Katie Sowers, Asst. Coach for the 49ers, uses Surface Pro 7 to put her plans into play.</p>
          <div style={{ position: 'relative'}}>
            <div>
              <a href="#">Learn More</a>
            </div>
            <div style={{ position: 'absolute', top: '12px', left: '98px' }}>
              <BiChevronRight className="icon-size" style={{ color: '#0067b8' }} />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/KjGFHVJ/card2.png" alt="" />
          <h3>New Surface Laptop 3</h3>
          <p>Express yourself powerfully with a thin, light, and elegant design, faster performance, and up to 11.5 hours battery life.</p>
          <div style={{ position: 'relative' }}>
            <div>
              <a href="#">Learn More</a>
            </div>
            <div style={{ position: 'absolute', top: '12px', left: '98px' }}>
              <BiChevronRight className="icon-size" style={{ color: '#0067b8' }} />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/2cnshH6/card3.png" alt="" />
          <h3>Save $150 + free controller</h3>
          <p>Buy an Xbox One X console and double your fun with a free select extra controller. Starting at $349.</p>
          <div style={{ position: 'relative' }}>
            <div>
              <a href="#">Learn More</a>
            </div>
            <div style={{ position: 'absolute', top: '12px', left: '98px' }}>
              <BiChevronRight className="icon-size" style={{ color: '#0067b8' }} />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/G57P0Pb/card4.png" alt="" />
          <h3>The new Microsoft Edge</h3>
          <p>Expect more. World class performance, with more privacy, more productivity, and more value.</p>
          <div style={{ position: 'relative' }}>
            <div>
              <a href="#">Learn More</a>
            </div>
            <div style={{ position: 'absolute', top: '12px', left: '98px' }}>
              <BiChevronRight className="icon-size" style={{ color: '#0067b8' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Showcase;
