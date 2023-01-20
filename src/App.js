import "./public.css";
import React from "react";

import Header from "./comps/header/Header";
import Shop from "./comps/shop/Shop";
import About from "./comps/about/About";
import About2 from "./comps/about/About2";
import Demo from "./comps/demo/Demo";
import Testimonials from "./comps/testimonials/Testimonials";

import Offers from "./comps/offers/Offers";
function App() {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "/button.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <div className="App">
      <Header />
      <Shop />
      <About />
      <About2 />
      <Offers />
      <Demo />
      <Testimonials />
    </div>
  );
}

export default App;
