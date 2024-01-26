
const targetImage = document.getElementById("chipmunksImg");
const saturateBtn = document.getElementById("saturate");
const opacityBtn = document.getElementById("opacity");
const invertBtn = document.getElementById("invert");
const sepiaBtn = document.getElementById("sepla");
const grayscaleBtn = document.getElementById("grayscale");

const addFilter = (element, filter) => {
    element.style.filter = filter;
};


saturateBtn.addEventListener("click", () => addFilter(targetImage, "saturate(200%)"));
opacityBtn.addEventListener("click", () => addFilter(targetImage, "opacity(25%)"));
invertBtn.addEventListener("click", () => addFilter(targetImage, "invert(100%)"));
sepiaBtn.addEventListener("click", () => addFilter(targetImage, "sepia(60%)"));
grayscaleBtn.addEventListener("click", () => addFilter(targetImage, "grayscale(100%)"));