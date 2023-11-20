import React, { useState, useEffect } from 'react';

const Typist = () => {
  const [currentText, setCurrentText] = useState('');
  const text = 'Imagine. Innovate. Inspire.';
  const delay = 100; // Adjust the delay to control the speed of the animation

  useEffect(() => {
    let currentIndex = 0;

    const animateNextLetter = () => {
      if (currentIndex < text.length) {
        setCurrentText(prevText => prevText + text[currentIndex]);
        currentIndex++;
        setTimeout(animateNextLetter, delay);
      }
    };

    animateNextLetter();
  }, [text, delay]);

  return <div>{currentText}</div>;
};

export default Typist;

