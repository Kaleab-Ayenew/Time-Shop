import React from "react";
import "./header.scss";

import Aos from "aos";

function Header(props) {
  const headerRef = React.useRef();
  const linksRef1 = React.useRef();
  const linksRef2 = React.useRef();
  const [headerOpen, setHeaderOpen] = React.useState(false);
  window.onscroll = () => {
    if (window.scrollY > 170) {
      headerRef.current.classList.add("sticky");
    } else {
      headerRef.current.classList.remove("sticky");
    }
  };

  function activeLinkStyler1(e) {
    Array.from(e.currentTarget.parentNode.querySelectorAll("li")).forEach(
      (item) => item.classList.remove("active-link")
    );
    e.currentTarget.classList.add("active-link");
  }
  React.useEffect(() => {
    Aos.init();
    Array.from(linksRef1.current.querySelectorAll("li")).forEach((item) =>
      item.addEventListener("click", (e) => {
        activeLinkStyler1(e);
        console.log("This is working");
      })
    );

    Array.from(linksRef2.current.querySelectorAll("li")).forEach((item) =>
      item.addEventListener("click", (e) => {
        activeLinkStyler1(e);
        console.log("This is working");
      })
    );
  }, []);
  return (
    <section id="home" className="header-section">
      <header ref={headerRef}>
        {headerOpen ? (
          <i
            onClick={() => {
              setHeaderOpen(false);
            }}
            class="ri-close-line menu-list-icon"
          ></i>
        ) : (
          <i
            onClick={() => {
              setHeaderOpen(true);
            }}
            className="ri-menu-2-line menu-list-icon"
          ></i>
        )}

        <div className="header-main">
          <span className="header__logo-name">Timeshop</span>
          <ul ref={linksRef1} className="header__menu-list">
            <li id="home-link" className="active-link">
              <a href="#home">Home</a>
            </li>
            <li id="shop-link">
              <a href="#shop">Products</a>
            </li>
            <li id="about-link">
              <a href="#about">About Us</a>
            </li>
            <li id="demo-link">
              <a href="#demo">Demo</a>
            </li>
            <li id="testimonials-link">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="list-button circle-feedback">Buy Now</li>
          </ul>
        </div>
        <div className={`header-float ${headerOpen ? "expand" : undefined}`}>
          <ul ref={linksRef2} className="header__menu-list">
            <li id="home-link" className="active-link">
              <a href="#home">Home</a>
            </li>
            <li id="shop-link">
              <a href="#shop">Products</a>
            </li>
            <li id="about-link">
              <a href="#about">About Us</a>
            </li>
            <li id="demo-link">
              <a href="#demo">Demo</a>
            </li>
            <li id="testimonials-link">
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
      </header>
      <div className="header__intro-div">
        <div className="header__intro-text">
          <h1>
            Digital Watches That Are Best For{" "}
            <span style={{ color: "var(--orange)" }}>Daily Use</span>
          </h1>
          <p>
            Welcome to our website! We specialize in smart watches and
            accessories. Our goal is to make your life easier with the help of
            technology.
          </p>
          <button className="header__explore-button circle-feedback">
            Explore More
          </button>
        </div>
        <div className="header__image-box">
          <img src={require("../../images/watches.png")} />
          <div className="header__msg-box-left">
            <strong>Get Up To 10% Off</strong>
            <p>You can get upto 10 precent discount form here</p>
          </div>
        </div>
      </div>
      <div className="header__card-holder">
        <div data-aos="fade-up" data-aos-delay={100} data-aos-duration={1000}>
          <i className="fa-solid fa-truck-fast"></i>
          <h2>Free Shipping</h2>
          <p>Free Shipping On All Online Order.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay={200} data-aos-duration={1000}>
          <i className="fa-solid fa-headset"></i>
          <h2>24/7 Support</h2>
          <p>Contact Us Anytime For Your Problem.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay={300} data-aos-duration={1000}>
          <i className="fa-solid fa-credit-card"></i>
          <h2>Secure Payment</h2>
          <p>Hey, Don't Worry. We Ensure Secure Transaction</p>
        </div>
      </div>
    </section>
  );
}

export default Header;
