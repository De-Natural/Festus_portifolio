import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Index.css';

function Index() {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");
  const textDisplay = "Welcome! I am glad that you wish to Explore my frontend journey, there you go!!!!";
  const indexRef = useRef(0);

  useEffect(() => {
    const typeWriterInterval = setInterval(() => {
      if (indexRef.current < textDisplay.length) {
        setDisplayedText((prev) => prev + textDisplay[indexRef.current]);
        indexRef.current += 1;
      } else {
        clearInterval(typeWriterInterval);
      }
    }, 158);

    const timer = setTimeout(() => {
      clearInterval(typeWriterInterval);
      navigate('/home');
    }, 10000);

    return () => {
      clearInterval(typeWriterInterval);
      clearTimeout(timer);
    };
  }, [navigate, textDisplay]);

  useEffect(() => {
    if (displayedText === textDisplay) {
      // Resetting the displayed text after it has fully displayed
      const resetTimer = setTimeout(() => {
        setDisplayedText(" "); // Clear the displayed text
        indexRef.current = 0; // Reset the index for a potential replay
      }, 1000); // Optional delay before resetting

      return () => clearTimeout(resetTimer);
    }
  }, [displayedText, textDisplay]);

  return (
    <div className="main">
      <div className="typewriter">{displayedText}</div>
    </div>
  );
}

export default Index;
