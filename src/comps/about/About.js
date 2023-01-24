import Aos from "aos";
import React from "react";
import "./about.scss";

function About(props) {
  React.useEffect(() => {
    Aos.init({
      easing: "ease",
    });
  }, []);
  return (
    <section id="about" className="about_section">
      <div className="about__info-container">
        <span style={{ color: "var(--orange)" }}>About Our Watches</span>
        <h2>For Easy Living, Get the Best & Fashionable Smart Watch</h2>
        <p>
          We believe that modern tech can provide convenience, comfort, safety,
          security, and many other practical benefits.
        </p>
        <p>
          We provide a wide selection of the latest smartwatches that are
          designed to fit all lifestyles. We offer various models from renowned
          brands so you can find the perfect watch for your needs. Whether
          you’re looking for basic tracking functions or more sophisticated
          features like GPS services, we have something for everyone.
        </p>
        <div className="about__list-container">
          <ul className="fa-ul">
            <li>
              <i className="fa-li fa-solid fa-play"></i>A Full warranty for one
              year
            </li>
            <li>
              <i className="fa-li fa-solid fa-play"></i>More than 250 stores all
              over the country
            </li>
            <li>
              <i className="fa-li fa-solid fa-play"></i>Full refund with-in 30
              days of purchase
            </li>
            <li>
              <i className="fa-li fa-solid fa-play"></i>24/7 customer support
            </li>
            <li>
              <i className="fa-li fa-solid fa-play"></i>Free delivery for online
              purchases
            </li>
          </ul>
        </div>
        <a href="#" className="about__read-more-btn">
          Read More
        </a>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay={200}
        data-aos-duration={2000}
        className="about__image-container"
      >
        <img src={require("../../images/about/image-2.png")} />
      </div>
    </section>
  );
}

export default About;
