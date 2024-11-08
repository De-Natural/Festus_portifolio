import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import '../css/chart.css'

const CircularProgressBar = ({ color, percentage }) => {
  const [progress, setProgress] = useState(0);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < percentage) {
        setProgress((prevProgress) => prevProgress + 1);
        setPercent((prevPercent) => prevPercent + 1);
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [progress, percentage]);

  // Constants for the circle
  const radius = 15.91549430918954;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="chartBox">
      <svg
        className=""
        viewBox="0 0 40 40"
        width="50%"
        height="50%"
      >
        {/* Background circle */}
        <circle
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="20"
          cy="20"
          stroke="rgba(128,128,128,0.1)"
        />
        {/* Progress circle */}
        <circle
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="20"
          cy="20"
          stroke={color}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="textBox">
          <span className="percentText">{percent}%</span>
      </div>

      
    </div>
  );
};

// CircularProgressBar.propTypes = {
//   color: PropTypes.string.isRequired,
//   percentage: PropTypes.number,
// };

export default CircularProgressBar;