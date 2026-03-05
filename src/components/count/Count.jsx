import { useEffect, useState } from "react";
import "./co.css";

// Bali Wedding Date: May 29, 2027, UTC+8
const TARGET_DATE = new Date("2027-05-29T00:00:00+08:00");

const Count = () => {
  // Initialize state with default values
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [tick, setTick] = useState(false); // triggers seconds animation

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      // trigger seconds animation
      setTick(true);
      setTimeout(() => setTick(false), 500);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="count">
      <div className="count_grids">
        {/* Days */}
        <div className="count_sub one">
          <div className="mariya">

          <h2 className="count_date">{(timeLeft.days ?? 0).toString().padStart(2,"0")}</h2>
          <h3 className="count_value">Days</h3>
          </div>
        </div>

      

        {/* Hours */}
        <div className="count_sub two">
          <div className="mariya">

          <h2 className="count_date">{(timeLeft.hours ?? 0).toString().padStart(2,"0")}</h2>
          <h3 className="count_value">Hours</h3>
          </div>
        </div>

       

       

      

        {/* Seconds */}
        <div className="count_sub three">
          <div className="mariya">

          <h2 className={`count_date seconds ${tick ? "pop" : ""}`}>
            {(timeLeft.seconds ?? 0).toString().padStart(2,"0")}
          </h2>
          <h3 className="count_value">Seconds</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;