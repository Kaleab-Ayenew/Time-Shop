import React from "react";
import "./header.css";

function Header(props) {
  return (
    <section className="header-section">
      <header>
        <div className="header-main">
          <span className="header__logo-name">Timeshop</span>
          <ul className="header__menu-list">
            <li className="active-link">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Feature</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li className="list-button circle-feedback">
              <a href="#">Buy Now</a>
            </li>
          </ul>
        </div>
        <div className="header-float">
          <ul className="header__menu-list">
            <li className="active-link">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Feature</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li className="list-button">
              <a href="#">Buy Now</a>
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
            Every man needs a good, dolid watch, my favorite watch is the
            presidential Rolex.
          </p>
          <button className="header__explore-button circle-feedback">
            Explore More
          </button>
        </div>
        <div className="header__image-box">
          <div className="header__msg-box-left">
            <strong>Get Up To 10% Off</strong>
            <p>You can get upto 10 precent discount form here</p>
          </div>
        </div>
      </div>
      <div className="header__card-holder">
        <div>
          <i className="fa-solid fa-truck-fast"></i>
          <h2>Free Shipping</h2>
          <p>Free Shipping On All Online Order.</p>
        </div>
        <div>
          <i className="fa-solid fa-headset"></i>
          <h2>24/7 Support</h2>
          <p>Contact Us Anytime For Your Problem.</p>
        </div>
        <div>
          <i className="fa-solid fa-credit-card"></i>
          <h2>Secure Payment</h2>
          <p>Hey, Don't Worry. We Ensure Secure Transaction</p>
        </div>
      </div>
    </section>
  );
}

export default Header;
