import React from "react";

function OfferCard(props) {
  return (
    <div className="offers__offer-card">
      <div className="offers__img-container">
        <img src={props.img} />
      </div>
      <div className="offers__card-info">
        <h2>Buy 50% Off</h2>
        <a href="#" className="offers_buy-btn">
          Buy Now
        </a>
      </div>
    </div>
  );
}

export default OfferCard;
