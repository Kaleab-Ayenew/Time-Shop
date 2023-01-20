import React from "react";
import ProductCard from "./ProductCard";

//CSS Import
import "./shop.css";
function Shop(props) {
  const products = [
    { title: "Apple Dark Red Watch", price: 100, stars: 4 },
    { title: "Apple Light Pink Watch", price: 170, stars: 3 },
    { title: "Apple Black Watch", price: 560, stars: 5 },
    { title: "Apple Light Pink Watch(Analoge)", price: 270, stars: 2 },
    { title: "Apple Red Watch", price: 190, stars: 5 },
    { title: "Apple White Watch", price: 470, stars: 4 },
  ];
  const renderedProducts = products.map((item, i) => (
    <ProductCard
      key={i + 1}
      {...item}
      img={require(`../../images/products/${i + 1}.png`)}
    />
  ));
  return (
    <section className="shop_section">
      <h3>Take Our Product</h3>
      <p>We have digital watches of all forms and designs to fit your style.</p>
      <div className="shop__product-list">{renderedProducts}</div>
    </section>
  );
}

export default Shop;
