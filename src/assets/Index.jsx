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
        indexRef.current += 1; // Increment the index 
        console.log(`Index: ${indexRef.current}, Character: ${textDisplay[indexRef.current]}`); 
      } else {  
        clearInterval(typeWriterInterval); // Clear interval when done  
      }  
    }, 120); // Make the typing slower to avoid skips  

    const timer = setTimeout(() => {  
      navigate('/home');  
    }, 10000); // Navigate after 10 seconds  

    return () => {  
      clearInterval(typeWriterInterval); // Prevent leaks  
      clearTimeout(timer); // Cleanup the timeout  
    };  
  }, [navigate]);  

  return (  
    <div className="main">  
      <div className="typewriter">{displayedText}</div> {/* Render the typed text */}  
    </div>  
  );  
}  

export default Index;