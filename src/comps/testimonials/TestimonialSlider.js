import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

//Testimonial Card
import TestimonialCard from "./TestimonialCard";

//Testimonial Data
import testimonialData from "./testimonialData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

//My Own CSS
import "./testimonials-slider.css";

function TestimonialSlider(props) {
  const testimonials = testimonialData;
  const renderedCards = testimonials.map((item, i) => (
    <SwiperSlide>
      <TestimonialCard
        key={i + 1}
        img={require(`../../images/testimonials/${i + 1}.jpg`)}
        {...item}
      />
    </SwiperSlide>
  ));

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
        {renderedCards}
      </Swiper>
      <i className="fa-solid fa-arrow-right next-btn"></i>
      <i className="fa-solid fa-arrow-left prev-btn"></i>
    </div>
  );
}

export default TestimonialSlider;
