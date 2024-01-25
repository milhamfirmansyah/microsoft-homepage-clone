'use client';
import React, { useState } from 'react';
import '../sass/navbar.css';
import { Icon } from '@fortawesome/fontawesome-svg-core';
import { BiSearch, BiCart, BiMenu } from 'react-icons/bi';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const nama = 'ilham';
  console.log(menu);

  return (
    <>
      <div className={menu ? "background-open" : "background-close"}></div>
      <nav className="main-nav">
        <BiMenu className="icon-size menu-btn" onClick={() => setMenu(!menu)} />
        <a href="#">
          <img src="https://i.ibb.co/wwLhz98/logo.png" alt="Microsoft" className="logo" />
        </a>

        <ul className={menu ? 'main-menu-open' : 'main-menu'}>
          <li className={menu ? 'open' : 'close'}>
            <a href="#">Office</a>
          </li>
          <li className={menu ? 'open' : 'close'}>
            <a href="#">Windows</a>
          </li>
          <li className={menu ? 'open' : 'close'}>
            <a href="#">Surface</a>
          </li>
          <li className={menu ? 'open' : 'close'}>
            <a href="#">Xbox</a>
          </li>
          <li className={menu ? 'open' : 'close'}>
            <a href="#">Deals</a>
          </li>
          <li className={menu ? 'open' : 'close'}>
            <a href="#">Support</a>
          </li>
        </ul>

        <ul className="right-menu">
          <li>
            <a href="#">
              <BiSearch className="icon-size" />
            </a>
          </li>
          <li>
            <a href="#">
              <BiCart className="icon-size" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
