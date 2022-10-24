import React, { useEffect, useState } from "react";
import * as sliderStyles from "./styles.module.css";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

const Slider = () => {
  const arr = [
    {
      heading: "We Help You On What You Need",
      discription: "Some dummy text here what you want to add its all on you!",
      image:
        "https://i.pinimg.com/736x/9f/83/4c/9f834c1bbb783ce57c8545dd4c7fae3b.jpg",
    },
    {
      heading: "We Help You On What You Need",
      discription: "Some dummy text here what you want to add its all on you!",
      image:
        "https://i.pinimg.com/736x/9f/83/4c/9f834c1bbb783ce57c8545dd4c7fae3b.jpg",
    },
    {
      heading: "We Help You On What You Need",
      discription: "Some dummy text here what you want to add its all on you!",
      image:
        "https://i.pinimg.com/736x/9f/83/4c/9f834c1bbb783ce57c8545dd4c7fae3b.jpg",
    },
    {
      heading: "We Help You On What You Need",
      discription: "Some dummy text here what you want to add its all on you!",
      image:
        "https://i.pinimg.com/736x/9f/83/4c/9f834c1bbb783ce57c8545dd4c7fae3b.jpg",
    },
  ];

  let [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index === arr.length - 1) {
      return setIndex(0);
    }
    setIndex(++index);
  };

  const prevSlide = () => {
    if (index === 0) {
      return setIndex(arr.length - 1);
    }
    setIndex(--index);
  };

  const scrollDown = () => {
    window && window.scrollTo(0, window.innerHeight);
  };

  return (
    <>
      <div className={`${sliderStyles.slider} themeBgColor`}>
        {arr.map((slide, slideIndex) => {
          return (
            <div key={slideIndex} className={sliderStyles.slide}>
              <div
                className={`${sliderStyles.slideTextBox} ${
                  index === slideIndex ? sliderStyles.animateTextBox : ""
                }`}
              >
                <h1>{slide.heading}</h1>
                <p>{slide.discription}</p>
              </div>
              <div
                className={`${sliderStyles.slideImage} ${
                  index === slideIndex ? sliderStyles.animateImage : ""
                }`}
                style={{ background: `url("${slide.image}")` }}
              ></div>
            </div>
          );
        })}
        <div className={sliderStyles.sliderArrows}>
          <FiArrowUp onClick={() => prevSlide()} />
          <FiArrowDown onClick={() => nextSlide()} />
        </div>
        <div className={sliderStyles.goDownBtn} onClick={scrollDown}>
          <FiArrowDown />
        </div>
      </div>
    </>
  );
};

export default Slider;
