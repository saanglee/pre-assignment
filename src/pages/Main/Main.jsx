import React, { useEffect, useState, useRef } from 'react';
import Feed from '../../components/Feed/Feed';

import styles from './main.module.scss';
import store from 'store';

const Main = () => {
  useEffect(() => {
    console.log('Main ---> ', store.get('userList'));
  }, []);
  const [feedData, setFeedData] = useState([]);
  const feedId = useRef(0);

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.Main}>
      {feedData.map((item) => (
        <div key={item.id}>
          <Feed key={item.id} {...item}></Feed>
        </div>
      ))}
    </div>
  );
};

export default Main;
