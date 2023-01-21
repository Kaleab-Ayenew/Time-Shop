import React from "react";
import "./offers.scss";
import OfferCard from "./OfferCard";
function Offers(props) {
  return (
    <section className="offers_section">
      <h1>Limited Time Offer</h1>
      <h2>50% Discount on All SX40 Model Products</h2>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
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
