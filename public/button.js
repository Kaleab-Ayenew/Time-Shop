let mainDivs = document.getElementsByClassName("circle-feedback");

Array.from(mainDivs).forEach((mainDiv) => {
  mainDiv.style.position = "relative";
  mainDiv.style.overflow = "hidden";
  let circle = document.createElement("div");
  circle.classList.add("cir");
  circle.style.position = "absolute";
  mainDiv.appendChild(circle);
  mainDiv.addEventListener("mousedown", (e) => {
    clickHandler(e);
  });

  function clickHandler(e) {
    let x, y;
    let cir = e.currentTarget.querySelector(".cir");
    cir.classList.remove("fill");
    x = e.pageX - 3 - e.currentTarget.offsetLeft;
    y = e.pageY - 3 - e.currentTarget.offsetTop;
    cir.style.left = `${x}px`;
    cir.style.top = `${y}px`;
    cir.classList.add("fill");
  }
});
