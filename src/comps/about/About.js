import React from "react";
import "./about.css";

function About(props) {
  return (
    <section className="about_section">
      <div className="about__info-container">
        <span style={{ color: "var(--orange)" }}>About Our Watch</span>
        <h2>For Easy Living, Get the Best & Fashionable Smart Watch</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="about__list-container">
          <ul className="fa-ul">
            <li>
              <i className="fa-li fa-solid fa-play"></i>Lorem Ipsum is not
              simply random text
            </li>
            <li>
              <i className="fa-li fa-solid fa-play"></i>Lorem Ipsum is not
              simply random text
            </li>
            <li>
              <i className="fa-li fa-solid fa-play"></i>Lorem Ipsum is not
              simply random text
            </li>
            <li>
              <i className="fa-li fa-solid fa-play"></i>Lorem Ipsum is not
              simply random text
            </li>
            <li>
              <i className="fa-li fa-solid fa-play"></i>Lorem Ipsum is not
              simply random text
            </li>
          </ul>
        </div>
        <a href="#" className="about__read-more-btn">
          Read More
        </a>
      </div>
      <div className="about__image-container">
        <img src={require("../../images/about/image-2.png")} />
      </div>
    </section>
  );
}

export default About;
