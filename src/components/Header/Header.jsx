import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { USER_LIST, userList, email, login, getId } from '../../user';

import {
  HomeIcon,
  LikeIcon,
  ShareIcon,
  CompassIcon,
} from '../../assets/index.js';
import logo from '../../assets/instagram_logo_small.png';

import styles from './header.module.scss';
import store from 'store';

const Header = () => {
  const navigate = useNavigate();

  const homeIcon = <HomeIcon />;
  const likeIcon = <LikeIcon />;
  const shareIcon = <ShareIcon />;
  const compassIcon = <CompassIcon />;

  const [userListState, setUserListState] = useRecoilState(userList);
  const emailState = useRecoilValue(email);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(login);

  const handleLogOutBtn = () => {
    const newUserList = userListState.filter(
      (user) => user.email !== emailState
    );
    console.log('handleLogoutBtn emailState: ', emailState);
    console.log('handleLogoutBtn newUserList: ', newUserList);
    setUserListState(newUserList);

    store.set(USER_LIST, newUserList);
    setIsLoggedIn(false);
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
