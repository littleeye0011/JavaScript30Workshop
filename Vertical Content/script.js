const slideContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-content");
const slideLeft = document.querySelector(".left-content");

const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");

const slideLength = slideRight.querySelectorAll("div").length;

let activeIndex = 0;

upBtn.addEventListener("click", () => changeImage("up"));
downBtn.addEventListener("click", () => changeImage("down"));

function changeImage(direction) {
  const slideHeight = slideContainer.clientHeight;
  if (direction === "up") {
    activeIndex--;
    if (activeIndex < 0) {
      activeIndex = slideLength - 1;
    }
  } else if (direction === "down") {
    activeIndex++;
    if (activeIndex > slideLength - 1) {
      activeIndex = 0;
    }
  }
  slideLeft.style.transform = `translateY(-${activeIndex * slideHeight}px)`;
  slideRight.style.transform = `translateY(-${activeIndex * slideHeight}px)`;
}
