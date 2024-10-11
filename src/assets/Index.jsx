import React, { useEffect, useState, useRef } from 'react';  
import { useNavigate } from 'react-router-dom';  
import '../css/Index.css';  

function Index() {  
  const navigate = useNavigate();  
  const [displayedText, setDisplayedText] = useState("");  
  const textDisplay = "Welcome! I am glad that you wish to Explore my frontend journey, there you go!!!!";  
  const indexRef = useRef(0); // Keep track of the index  

  useEffect(() => {  
    const typeWriterInterval = setInterval(() => {  
      if (indexRef.current < textDisplay.length) {  
        setDisplayedText((prev) => prev + textDisplay[indexRef.current]);  
        indexRef.current += 1;
        console.log(`Index: ${indexRef.current}, Character: ${textDisplay[indexRef.current]}`); 
      } else {  
        clearInterval(typeWriterInterval);
      }  
    }, 128); // Make the typing slower to avoid skips  

    const timer = setTimeout(() => {  
      navigate('/home');  
    }, 10000); 

    return () => {  
      clearInterval(typeWriterInterval); // Prevent leaks  
      clearTimeout(timer);
    };  
  }, [navigate]);  

  return (  
    <div className="main">  
      <div className="typewriter">{displayedText}</div> {/* Render the typed text */}  
    </div>  
  );  
}  

export default Index;