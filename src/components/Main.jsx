import React,{useState} from 'react';
import Feed from './Feed';

import './Main.css';
const Main = () => {

  const getData = async = () =>{
    const response = await fetch().then((response)=>response.json())

    const initData = response.map((item) => {
      return{
        name: item.name,
        image: item.img,
        content: item.content
      }
    })
    // setData(initData);
  }

  return (
    <div className="Main">
      <Feed />
      <Feed />
    </div>
  );
};

export default Main;
