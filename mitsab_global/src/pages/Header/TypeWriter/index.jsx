import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypeWriter = ({ className }) => {
  const [text1] = useTypewriter({
    words: ['Building Dreams', 'Building Dreams'],
    loop: true, // Continuous looping
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  const [text2] = useTypewriter({
    words: ['Creating Realities', 'Creating Realities'],
    loop: true, // Continuous looping
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className={className || ''}>
      <h1 style={{ fontWeight: 'bold', margin: '20px 0px' }}>
        {text1}{' '}
        <span style={{ color: 'black' }}>
          <Cursor cursorStyle="|" />
        </span>
        <br />
        <span style={{ fontWeight: 'bold', color: 'blue' }}>
          {text2}
        </span>
        <span style={{ color: 'blue' }}>
          <Cursor cursorStyle="|" />
        </span>
      </h1>
    </div>
  );
};

export default TypeWriter;
