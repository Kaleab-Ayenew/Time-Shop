import Aos from "aos";
import React from "react";

function About2(props) {
  React.useEffect(() => {
    Aos.init({
      easing: "ease",
    });
  }, []);
  return (
    <section className="about_section">
      <div
        data-aos="fade-up"
        data-aos-delay={300}
        data-aos-duration={2000}
        className="about__image-container"
      >
        <img src={require("../../images/about/image-1.png")} />
      </div>
      <div className="about__info-container">
        <span style={{ color: "var(--orange)" }}>Why Choose Us</span>
        <h2>Our Products Combine Durablity with Elegance</h2>
        <p>Safety and customer satisfaction are our top priorities.</p>
        <p>
          All of our products are subjected to rigorous quality testing before
          being offered for sale on our website. We also provide excellent
          customer service. If you ever encounter any problems with your
          purchase, contact us right away and we’ll do everything we can to
          provide a quick solution.
        </p>
        <div className="about__list-container">
          <ul className="fa-ul">
            <li>
              <i className="fa-li fa-solid fa-play"></i>Fully water resistant
            </li>
            <li>
              <i className="fa-li fa-solid fa-play"></i>Three days battery
              life(Smart Watches)
            </li>
            <li>
              <i className="fa-li fa-solid fa-play"></i>Military grade shock
              absorbtion
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About2;
