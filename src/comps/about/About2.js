import Aos from "aos";
import React from "react";

function About2(props) {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section className="about_section">
      <div
        data-aos="fade-up"
        data-aos-delay={300}
        data-aos-duration={1000}
        className="about__image-container"
      >
        <img src={require("../../images/about/image-1.png")} />
      </div>
      <div className="about__info-container">
        <span style={{ color: "var(--orange)" }}>Why Choose Us</span>
        <h2>Choose Our Best and Fashionable Products</h2>
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
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About2;
