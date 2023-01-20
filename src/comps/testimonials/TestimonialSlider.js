import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

//My Own CSS
import "./testimonials-slider.css";

function TestimonialSlider(props) {
  return (
    <div className="testimonials__slider-container">
      <Swiper
        slidesPerView={3}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        loop={true}
        loopedSlides={3}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-slide-box">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-box">2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-box">3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-box">4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-box">5</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-box">6</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-box">7</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-box">8</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-box">9</div>
        </SwiperSlide>
      </Swiper>
      <i className="fa-solid fa-arrow-right next-btn"></i>
      <i className="fa-solid fa-arrow-left prev-btn"></i>
    </div>
  );
}

export default TestimonialSlider;
