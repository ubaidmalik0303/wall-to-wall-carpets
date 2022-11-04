import React, { useState } from "react";
import * as sliderStyles from "./styles.module.css";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { StaticImage } from "gatsby-plugin-image";
import Slide1 from "../../images/slide1.jpg";
import Slide2 from "../../images/slide2.jpg";
import Slide3 from "../../images/slide3.jpg";
import Slide4 from "../../images/slide4.jpg";

const Slider = () => {
  const arr = [
    {
      heading: "We Help You On What You Need",
      discription: "Some dummy text here what you want to add its all on you!",
      image: Slide4,
    },
    {
      heading: "Carpets Variation",
      discription: "Some dummy text here what you want to add its all on you!",
      image: Slide1,
    },
    {
      heading: "Living Room Carpets",
      discription: "Some dummy text here what you want to add its all on you!",
      image: Slide2,
    },
    {
      heading: "Mosque Carpets",
      discription: "Some dummy text here what you want to add its all on you!",
      image: Slide3,
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
    window && window.scrollTo(0, window.scrollY + window.innerHeight - 65);
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
                style={{ backgroundImage: `url(${slide.image})` }}
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
