import { useEffect, useState } from "react";
import "./it.css";

const images = [
  "https://www.pleniluniovilla.com/wp-content/uploads/2026/02/Plenilunio-Villa-Clifftop-Uluwatu-1.jpeg",
  "https://www.pleniluniovilla.com/wp-content/uploads/2021/10/plenilunio-villa-wedding-4.jpg",
  "https://www.pleniluniovilla.com/wp-content/uploads/2021/09/IMG_3602.jpg",
  "https://www.pleniluniovilla.com/wp-content/uploads/2021/10/plenilunio-villa-wedding-2.jpg",
  "https://www.pleniluniovilla.com/wp-content/uploads/2021/10/RHwedding-138.jpg",
  "https://www.pleniluniovilla.com/wp-content/uploads/2021/10/RHwedding-226.jpg",
];

const Venue = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="it">
      <div className="couple_name">
        <h2 className="couple_solo">
          <span className="first_charcter">T</span>he Venue
        </h2>
      </div>
      <div className="nope">
        <div className="sliders">
          {images.map((img, index) => (
            <div
              key={index}
              className={`slide ${index === current ? "active" : ""}`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>
      </div>
      <div className="holy">

<img className="hoho" src="https://www.pleniluniovilla.com/wp-content/uploads/2025/09/logo-black.png" alt="" />
      </div>
      <h2 className="villa_name">VILLA PLENILUNIO</h2>
      <p className="locate">Bali, Indonesia</p>
<div className="holy">
    <button className="location_btn">Venue Location</button>
</div>
    </div>
  );
};

export default Venue;
