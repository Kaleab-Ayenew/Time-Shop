import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
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
import "./testimonials-slider.scss";

function TestimonialSlider(props) {
  const testimonials = testimonialData;
  let [slides, setSlides] = React.useState(3);
  function slideChecker() {
    if (window.innerWidth <= 800) {
      setSlides(1);
      console.log("The 1");
    } else if (window.innerWidth > 800 && window.innerWidth <= 1030) {
      setSlides(2);
      console.log("The 2");
    } else if (window.innerWidth > 1030) {
      setSlides(3);
    }
  }
  window.onresize = slideChecker;
  const renderedCards = testimonials.map((item, i) => (
    <SwiperSlide key={i + 1}>
      <TestimonialCard
        img={require(`../../images/testimonials/${i + 1}.jpg`)}
        {...item}
      />
    </SwiperSlide>
  ));
  React.useLayoutEffect(() => {
    slideChecker();
  }, []);
  console.log("the page was rendered");
  return (
    <div className="testimonials__slider-container">
      <Swiper
        slidesPerView={slides}
        navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        loop={true}
        loopedSlides={slides}
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
