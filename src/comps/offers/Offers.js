import React from "react";
import "./offers.scss";
import OfferCard from "./OfferCard";
function Offers(props) {
  return (
    <section className="offers_section">
      <h1>Limited Time Offer</h1>
      <h2>50% Discount on all Apple Smart Watches</h2>
      <p>
        We have gone all out and put together a selection of our top-of-the-line
        wrist watches at discounted prices just for you.
      </p>
      <div className="offers__offer-card-container">
        <OfferCard img={require("../../images/products/5.png")} />
        <OfferCard img={require("../../images/products/4.png")} />
        <OfferCard img={require("../../images/products/3.png")} />
      </div>
    </section>
  );
}

export default Offers;
