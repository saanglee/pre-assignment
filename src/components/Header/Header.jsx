import React, { useMemo } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

import {
  HomeIcon,
  LikeIcon,
  ShareIcon,
  CompassIcon,
} from '../../assets/index.js';
import logo from '../../assets/instagram_logo_small.png';

import store from 'store';
import styles from './header.module.scss';

const USER_LIST = 'userList';

const Header = () => {
  const navigate = useNavigate();
  const localStorageUserList = store.get(USER_LIST) || [];

  const homeIcon = <HomeIcon />;
  const likeIcon = <LikeIcon />;
  const shareIcon = <ShareIcon />;
  const compassIcon = <CompassIcon />;

  const userList = useMemo(() => {
    return localStorageUserList;
  }, [localStorageUserList]);

  const location = useLocation();
  const userState = location.state || { email: '', pwd: '', isLoggedIn: false };
  const { email, isLoggedIn } = userState;

  const handleLogOutBtn = () => {
    const newUserList = userList.filter((user) => user.email !== email);
    store.set(USER_LIST, newUserList);
    navigate('/');
  };

  const logInBtn = (
    <button
      type="button"
      onClick={() => navigate('/')}
      className={styles.button}
    >
      LogIn
    </button>
  );
  const logOutBtn = (
    <button type="button" onClick={handleLogOutBtn} className={styles.button}>
      LogOut
    </button>
  );

  return (
    <header className={styles.Header}>
      <div className={styles.header_wrapper}>
        <Link to="/main">
          <div className={styles.logo_img_wrapper}>
            <img
              src={logo}
              alt="instagram_text_logo"
              className={styles.logo_img}
            />
          </div>
        </Link>
        <div className={styles.input_warpper}>
          <input type="text" className={styles.search} placeholder="검색" />
        </div>
        <nav>
          <ul>
            <li className={styles.icon}>{homeIcon}</li>
            <li className={styles.icon}>{shareIcon}</li>
            <li className={styles.icon}>{compassIcon}</li>
            <li className={styles.icon}>{likeIcon}</li>
            <li>{isLoggedIn ? logOutBtn : logInBtn}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
