import React from "react";
import "./product-card.scss";
import Aos from "aos";

function ProductCard(props) {
  const renderedStars = [];
  console.log(props);
  for (let i = 0; i < props.stars; i++) {
    renderedStars.push(<i key={i + 1} className="ri-star-fill"></i>);
  }
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={150}
      data-aos-duration={1000}
      className="shop__product-card"
    >
      <div className="shop__product-img-holder">
        <img src={props.img} alt="watch" />
      </div>
      <h4>{props.title}</h4>
      <div className="shop__product-info">
        <span className="shop__product-price">${props.price}</span>
        <span>
          {renderedStars} {"("}
          {Number(props.stars) * 5}
          {")"}
        </span>
      </div>
      <div className="shop__product-btn-group">
        <button className="circle-feedback">Add to Cart</button>
        <button className="circle-feedback">Buy Now</button>
      </div>
    </div>
  );
}

export default ProductCard;
