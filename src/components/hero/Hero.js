import React from "react";
import "./HeroStyles.css";
import "../../index.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="content">
          <div className="text">
            <p>Always</p>
          </div>
          <h1>Served Fresh</h1>
          <h1>Daily</h1>
          <div className="btn">Delivery</div>
          <div className="btn">Takeout</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
