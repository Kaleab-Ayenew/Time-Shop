import "./public.scss";
import "aos/dist/aos.css";
import React from "react";

import Header from "./comps/header/Header";
import Shop from "./comps/shop/Shop";
import About from "./comps/about/About";
import About2 from "./comps/about/About2";
import Demo from "./comps/demo/Demo";
import Testimonials from "./comps/testimonials/Testimonials";
import Footer from "./comps/footer/Footer";

import Offers from "./comps/offers/Offers";
function App() {
  const [buttonAdded, setButtonAdded] = React.useState(false);
  const activeLink = React.useRef("home");
  window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let current = "home";
    sections.forEach((item, i) => {
      if (item.offsetTop <= window.scrollY) {
        current = item.id ? item.id : "about";
      }
      if (activeLink.current !== current) {
        document
          .querySelectorAll(".header__menu-list li, .header-float li")
          .forEach((item) => {
            item.classList.remove("active-link");
            if (item.querySelector(`a[href="#${current}"]`)) {
              item.classList.add("active-link");
              activeLink.current = current;
            }
          });
      }
    });
  });
  return (
    <div className="App">
      <Header />
      <Shop />
      <About />
      <About2 />
      <Offers />
      <Demo />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
