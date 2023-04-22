import React, { useState } from "react";
import "../Slider/Slider.css";
import { SliderData } from "./sliderData";

import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const length = SliderData.length;

  const sliderBackButton = () => {
    setCurrentIndex(currentIndex === 0 ? 0 : currentIndex - 1);
  };

  const sliderFrontButton = () => {
    setCurrentIndex(
      currentIndex === length - 1 ? length - 1 : currentIndex + 1
    );
  };

  return (
    <section className="slider-container">
      <div className="slider-item">
        <div className="hero-slider-img-container">
          <img
            src={SliderData[currentIndex].image}
            className="hero-slider-img"
            alt=""
          />
        </div>
        <div className="slider-text-container">
          <p className="slider-title">{SliderData[currentIndex].header}</p>
          <p className="slider-desc">{SliderData[currentIndex].description}</p>
        </div>
      </div>

      <AiOutlineArrowRight
        className="slider-button right-button arrow-icon"
        onClick={sliderFrontButton}
      />

      <AiOutlineArrowLeft
        className="slider-button left-button arrow-icon"
        onClick={sliderBackButton}
      />
    </section>
  );
};

export default Slider;
