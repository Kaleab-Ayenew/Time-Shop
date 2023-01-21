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
