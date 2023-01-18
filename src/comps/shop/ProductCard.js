import React from "react";
import "./product-card.css";
import img1 from "../../images/products/1.png";
function ProductCard(props) {
  const renderedStars = [];
  console.log(props);
  for (let i = 0; i < props.stars; i++) {
    renderedStars.push(<i className="fa-solid fa-star"></i>);
  }
  return (
    <div className="shop__product-card">
      <div className="shop__product-img-holder">
        <img src={props.img} alt="watch" />
      </div>
      <h4>{props.title}</h4>
      <div className="shop__product-info">
        <span className="shop__product-price">${props.price}</span>
        <span>
          {renderedStars} {Number(props.stars) * 5}
        </span>
      </div>
      <div className="shop__product-btn-group">
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;
