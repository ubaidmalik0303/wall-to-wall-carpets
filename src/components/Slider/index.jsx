import React, { useState } from "react";
import * as sliderStyles from "./styles.module.css";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Slider = ({ data }) => {
  const imagesData = data.slider.edges;

  const arr = [
    {
      heading: "We Help You On What You Need",
      discription: "Some dummy text here what you want to add its all on you!",
    },
    {
      heading: "Carpets Variation",
      discription: "Some dummy text here what you want to add its all on you!",
    },
    {
      heading: "Living Room Carpets",
      discription: "Some dummy text here what you want to add its all on you!",
    },
    {
      heading: "Mosque Carpets",
      discription: "Some dummy text here what you want to add its all on you!",
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
              >
                <GatsbyImage
                  style={{
                    gridArea: "1/1",
                  }}
                  image={getImage(imagesData[slideIndex]?.node)}
                  layout="fullWidth"
                  aspectRatio={3 / 1}
                  alt=""
                />
              </div>
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
