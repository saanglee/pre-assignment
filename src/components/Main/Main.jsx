import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import store from 'store';

import Feed from '../Feed/Feed';

import styles from './main.module.scss';

const USER_LIST = 'userList';

const Main = () => {
  const localStorageUserList = store.get(USER_LIST) || [];

  const userList = useMemo(() => {
    return localStorageUserList;
  }, [localStorageUserList]); // ❓

  const navigate = useNavigate();
  const location = useLocation();

  const userState = location.state || { email: '', pwd: '', isLoggedIn: false };
  const { email, pwd, isLoggedIn } = userState;

  const [feedData, setFeedData] = useState([]);
  const feedId = useRef(0);

  /* Get data from Json */
  const getData = async () => {
    const response = await fetch('data/data.json').then((response) =>
      response.json()
    );
    const initData = response.map((item) => {
      return {
        name: item.name,
        image: item.img,
        content: item.content,
        id: feedId.current++,
      };
    });
    setFeedData(initData);
  };

  console.log('feedData:  ', feedData);

  useEffect(() => {
    getData();
  }, []);

  let test = feedData.map((item) => {
    return item.img;
  });
  console.log('test :  ', test);

  /* LogIn, LogOut Button */

  const handleLogInBtn = () => {
    navigate('/');
  };

  const handleLogOutBtn = () => {
    const newUserList = userList.filter((user) => user.email !== email);
    store.set(USER_LIST, newUserList); // ❓ 앞에 USER_LIST, 이건 왜 쓰지?
    navigate('/');
  };

  const logInBtn = (
    <button type="button" onClick={handleLogInBtn}>
      LogIn
    </button>
  );
  const logOutBtn = (
    <button type="button" onClick={handleLogOutBtn}>
      LogOut
    </button>
  );

  return (
    <div className={styles.Main}>
      {isLoggedIn ? logOutBtn : logInBtn}
      {feedData.map((item) => (
        <Feed key={item.id} {...item}></Feed>
      ))}
    </div>
  );
};

export default Main;
