import React, { useState } from "react";
import * as styles from "./styles.module.css";
import Heading from "../Heading";
import { FaLongArrowAltLeft, FaLongArrowAltRight, FaCommentAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const CardSlider = () => {
  const [my_swiper, set_my_swiper] = useState({});

  return (
    <div className={`conatiner-fluid ${styles.cardSlider} themeBgColor`}>
      <div className="container">
        <div></div>
        <Heading variant="h3">Our Beloved Customers Sayings</Heading>
        <div data-aos="fade-up" className={styles.sliderContainer}>
          <div className={styles.sliderArrows}>
            <FaLongArrowAltLeft onClick={() => my_swiper.slidePrev()} />
            <FaLongArrowAltRight onClick={() => my_swiper.slideNext()} />
          </div>
          <div>
            <Swiper
              onInit={(ev) => {
                set_my_swiper(ev);
              }}
              spaceBetween={10}
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
                1000: {
                  width: 1000,
                  slidesPerView: 3,
                },
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((val) => {
                return (
                  <SwiperSlide>
                    <div className={styles.cardSlide}>
                      <FaCommentAlt size={30} className="mb-3" />
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
