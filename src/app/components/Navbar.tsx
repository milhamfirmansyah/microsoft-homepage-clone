import React from 'react';
import '../sass/navbar.css';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { BiSearch, BiCart } from 'react-icons/bi';

function Navbar() {
  return (
    <nav className="main-nav">
      <img src="https://i.ibb.co/wwLhz98/logo.png" alt="Microsoft" className="logo" />

      <ul className="main-menu">
        <li>
          <a href="#">Office</a>
        </li>
        <li>
          <a href="#">Windows</a>
        </li>
        <li>
          <a href="#">Surface</a>
        </li>
        <li>
          <a href="#">Xbox</a>
        </li>
        <li>
          <a href="#">Deals</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </ul>

      <ul className="right-menu">
        <li>
          <a href="#">
            <BiSearch className='icon-size'/>
          </a>
        </li>
        <li>
          <a href="#">
            <BiCart className='icon-size'/>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
