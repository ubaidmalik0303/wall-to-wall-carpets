import React from "react";
import * as styles from "./styles.module.css";
import Heading from "../Heading";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const CardSlider = () => {
  const sliderContainer =
    document && document.getElementsByClassName(styles.slidesMaincontainer);

  const prevSlide = () => {
    sliderContainer[0].scrollLeft = sliderContainer[0].scrollLeft - 270;
  };

  const nextSlide = () => {
    sliderContainer[0].scrollLeft = sliderContainer[0].scrollLeft + 270;
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     nextSlide();
  //   }, 10000);
  // }, [nextSlide]);

  return (
    <div className={`conatiner-fluid ${styles.cardSlider} themeBgColor`}>
      <div className="container">
        <div></div>
        <Heading variant="h3">Our Beloved Customers Sayings</Heading>
        <div data-aos="fade-up" className={styles.sliderContainer}>
          <div className={styles.sliderArrows}>
            <FaLongArrowAltLeft onClick={prevSlide} />
            <FaLongArrowAltRight onClick={nextSlide} />
          </div>
          <div className={styles.slidesMaincontainer}>
            <Swiper spaceBetween={10} slidesPerView={3}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => {
                return (
                  <SwiperSlide>
                    <div className={styles.cardSlide}>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Cupiditate ea tempora qui velit dolore sed eos
                        eaque provident tempore quibusdam facere, itaque esse
                        illum recusandae rem architecto dolor consequuntur
                        voluptatem!
                      </p>
                      <h5>Ubaid Malik</h5>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
