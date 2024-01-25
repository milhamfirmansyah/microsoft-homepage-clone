import React from 'react';
import '../sass/footer.css';
import { BiGlobe } from 'react-icons/bi';

function Footer() {
  return (
    <footer className="footer">
      <div className='footer-top' style={{display: 'flex', alignItems: 'center'}}>
        <BiGlobe className="icon-size" /> <span style={{ marginLeft: '6px' }}>English (United States)</span>
      </div>
      <div className="footer-bottom">
        <a href="#">Sitemap</a>
        <a href="#">Contact Microsoft</a>
        <a href="#">Privacy & cookies</a>
        <a href="#">Terms of use</a>
        <a href="#">Trademarks</a>
        <a href="#">Safety & eco</a>
        <a href="#">About our ads</a>
        <p>&copy; Microsoft 2020</p>
      </div>
    </footer>
  );
}

export default Footer;
