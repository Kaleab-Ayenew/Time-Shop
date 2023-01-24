import React from "react";
import "./demo.scss";
function Demo(props) {
  const [videoPlaying, setVideoPlaying] = React.useState(false);
  const vidRef = React.useRef(null);
  function videoControler(e) {
    setVideoPlaying((oldVal) => !oldVal);
    if (!videoPlaying) {
      vidRef.current.play();
      setVideoPlaying(true);
    } else {
      vidRef.current.pause();
      setVideoPlaying(false);
    }
  }
  return (
    <section id="demo" className="demo_section">
      <h1>Product Demo</h1>
      <h2>Get More Information About Our Products</h2>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className="demo__video-container">
        {videoPlaying ? (
          <i
            onClick={videoControler}
            className="ri-pause-circle-line pause-btn"
          ></i>
        ) : (
          <i
            onClick={videoControler}
            className="ri-play-circle-line play-btn"
          ></i>
        )}
        <video poster={require("../../images/demo/poster.jpg")} ref={vidRef}>
          <source src={require("../../videos/demo.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default Demo;
