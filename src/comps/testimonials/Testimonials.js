import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import "./testimonials.scss";

function Testimonials(props) {
  return (
    <section id="testimonials" className="testimonials_section">
      <h1>Testimonials</h1>
      <p>What Customers Say About Us!</p>
      <TestimonialSlider />
    </section>
  );
}

export default Testimonials;
