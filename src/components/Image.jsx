import React, { useRef, useState, useEffect } from 'react';
import PLACE_HOLDER from '../assets/placeholder.jpg';

const Image = (src) => {
  const imgRef = useRef(null);
  const observerRef = useRef();
  const [isLoad, setIsLoad] = useState(false);

  const onIntersection = (entries, io) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setIsLoad(true);
      }
    });
  };
  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(onIntersection);
    }
    imgRef.current && observerRef.current.observe(imgRef.current);
  }, []);

  return (
    <img ref={imgRef} src={isLoad ? src.src : PLACE_HOLDER} width="100%" />
  );
};

export default Image;
