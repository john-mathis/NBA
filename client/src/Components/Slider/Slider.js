import React, { useState } from "react";
import "../Slider/Slider.css";
import { SliderData } from "./sliderData";

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
      <div className="slider fade">
        <img
          className="slider-img"
          src={SliderData[currentIndex].image}
          alt="team's star players"
        />
        <p className="next-slide" onClick={sliderBackButton}>
          ❮
        </p>
        <p className="prev-slide" onClick={sliderFrontButton}>
          ❯
        </p>
        <p className="slider-text slider-header bold text-2xl">
          {SliderData[currentIndex].header}
        </p>
        <p className="slider-text slider-description">
          {SliderData[currentIndex].description}
        </p>{" "}
      </div>
      <div className=" dot-container center-align">
        <span
          className="dot"
          onClick={() => {
            setCurrentIndex(0);
          }}
        ></span>
        <span
          className="dot"
          onClick={() => {
            setCurrentIndex(1);
          }}
        ></span>
        <span
          className="dot"
          onClick={() => {
            setCurrentIndex(2);
          }}
        ></span>
        <span
          className="dot"
          onClick={() => {
            setCurrentIndex(3);
          }}
        ></span>
        <span
          className="dot"
          onClick={() => {
            setCurrentIndex(4);
          }}
        ></span>
      </div>
    </section>
  );
};

export default Slider;
