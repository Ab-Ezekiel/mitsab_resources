import React, { useState, useEffect } from 'react';

import './BackgroundSlider.css';



const BackgroundSlider = ({ images, duration = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);
    return () => clearInterval(timer);
  }, [images.length, duration]);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default BackgroundSlider;
