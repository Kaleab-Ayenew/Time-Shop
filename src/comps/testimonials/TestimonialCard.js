import React from "react";
import "./testimonial-card.css";
function TestimonialCard(props) {
  const renderedStars = [];
  for (let i = 0; i < props.rating; i++) {
    renderedStars.push(<i class="ri-star-fill"></i>);
  }
  return (
    <div className="swiper-slide-box">
      <i class="fa-solid fa-quote-left"></i>
      <p>{props.text}</p>
      <div className="swiper-box__person-info">
        <div className="swiper-box__img-holder">
          <img src={props.img} />
        </div>
        <div className="swiper-box__info-holder">
          <div>
            <span>{props.personName}</span>
            <span>{props.personTitle}</span>
          </div>
          <span>{renderedStars}</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
