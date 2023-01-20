import React from "react";
import "./demo.css";
function Demo(props) {
  return (
    <section className="demo_section">
      <h1>Product Demo</h1>
      <h2>Get More Information About Our Products</h2>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className="demo__video-container">
        <img src={require("../../images/demo/play-button.png")} />
        <video>
          <source src={require("../../videos/demo.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default Demo;
