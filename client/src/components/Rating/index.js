import "./Rating.css"
import React, { useState } from "react";
import { rateFreelancer } from "../../functions/RateFreelancer";

function Rating(props) {
  const [rating, setRating] = useState(0);

  const handleMouseOver = (event) => {
    const value = Number(event.target.getAttribute("data-value"));
    setRating(value);
  };

  const handleMouseLeave = () => {
    setRating(0);
  };

  const handleRateClick = (event) => {
    const value = Number(event.target.getAttribute("data-value"));
    console.log("Rated: ", value, props.address);
    rateFreelancer(props.address, value);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={value <= rating ? "active" : ""}
          data-value={value}
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          onClick={handleRateClick}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
