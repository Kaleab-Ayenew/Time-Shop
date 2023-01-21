import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import "./testimonials.scss";

function Testimonials(props) {
  return (
    <section id="testimonials" className="testimonials_section">
      <h1>Testimonials</h1>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <TestimonialSlider />
    </section>
  );
}

export default Testimonials;
