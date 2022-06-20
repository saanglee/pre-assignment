import React from 'react';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.header_wrapper}>
        <div className={styles.logo_img}>
          <img
            src="images/instagram_logo.png
          "
            alt="instagram_text_logo"
          />
        </div>
        <div className={styles.input_warpper}>
          <input type="text" className={styles.search} placeholder="검색" />
        </div>
        <nav>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>Login/Logout</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
