import React, { useEffect, useState } from 'react';
import {Typed} from 'react-typed';
import '../styles/Home.scss';

const  Home  = () => {
  const [displayText, setDisplayText] = useState('');
  const text = "I am a Full Stack Developer";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div class="typewriter">
      {displayText}
    </div>
  )
}

export default Home;