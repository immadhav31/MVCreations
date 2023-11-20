import React, { useState, useEffect } from 'react';

const Typist = ({ words }) => {
 const [visible, setVisible] = useState('');
 const [wordIndex, setWordIndex] = useState(0);
 const [charIndex, setCharIndex] = useState(0);

 useEffect(() => {
    const interval = setInterval(() => {
      setVisible(prevText => {
        const currentWord = words[wordIndex];
        const nextChar = currentWord.charAt(charIndex);

        if (nextChar === '') {
          setCharIndex(0);
          setWordIndex((wordIndex + 1) % words.length);
        } else {
          setCharIndex(charIndex + 1);
        }

        return currentWord.substring(0, charIndex + 1);
      });
    }, 170);

    return () => clearInterval(interval);
 }, [charIndex, wordIndex, words]);

 return <span>{visible}</span>;
};

const TypingComponent = () => {
 const words = ['Imagine.', 'Innovate.', 'Inspire.'];

 return (
    <div>
      <Typist words={words} />
    </div>
 );
};

export default TypingComponent;