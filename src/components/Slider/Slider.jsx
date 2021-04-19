import React, { useState } from "react";
import "./Slider.scss";
import { SliderData } from "../common/data/SliderData";

const Slider = (props) => {
  const [current, setCurrent] = useState(0);
  const length = props.slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <i className="las la-arrow-alt-circle-left left-arrow" onClick={prevSlide}></i>
      <i className="las la-arrow-alt-circle-right right-arrow" onClick={nextSlide}></i>
      {SliderData.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"} key={index}>
            {index === current && <img src={slide.image} alt="" className="image" />}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
