import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="Header">
      <div className="header_wrapper">
        <div className="logo_img">
          <img
            src="img/instagram_logo.png
          "
            alt="instagram_text_logo"
          />
        </div>
        <div className="input_warpper">
          <input type="text" className="search" placeholder="검색" />
        </div>
        <nav className="header_menu">
          <ul className="headermenu_ul">
            <li className="header_item">1</li>
            <li className="header_item">2</li>
            <li className="header_item">3</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
