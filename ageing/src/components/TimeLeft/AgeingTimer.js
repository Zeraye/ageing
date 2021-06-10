import { useState } from "react";

import "./AgeingTimer.css";

const AgeingTimer = (props) => {
  const [time, setTime] = useState(0);
  const birthDate = props.time;

  const date = {
    year: birthDate.substr(0, 4),
    month: birthDate.substr(5, 2) - 1,
    day: birthDate.substr(8, 2),
  };

  const birthTime = new Date(date.year, date.month, date.day).getTime() / 1000;

  setInterval(() => {
    let newTime = Date.now() / 1000;
    let timeLeft = newTime - birthTime;
    timeLeft /= 3600;
    timeLeft /= 24;
    timeLeft /= 365.25;
    timeLeft = (Math.round(timeLeft * 100000000) / 100000000).toFixed(8);
    setTime(timeLeft);
  }, 50);

  return (
    <div className="timer">
      <div>{time} years</div>
    </div>
  );
};

export default AgeingTimer;
