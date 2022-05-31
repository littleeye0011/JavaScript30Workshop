const ratingContainer = document.querySelector(".rating-container");
const ratings = document.querySelectorAll(".rating");
const panel = document.getElementById("panel");
const sendBtn = document.getElementById("submit");

let selected;
ratingContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selected = e.target.nextElementSibling.innerHTML;
  }
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
  <img src="https://raw.githubusercontent.com/kongruksiamza/javascript-workshop/0d2b807cb7bec76b35021780ede6a95501659f7a/Workshop%2026%20-%20%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%A1%E0%B8%B4%E0%B8%99%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%9E%E0%B8%B6%E0%B8%87%E0%B8%9E%E0%B8%AD%E0%B9%83%E0%B8%88/image/heart.svg" class="img-complete">
  <strong>ขอบคุณสำหรับการประเมิน</strong>
  <br>
  <strong>ผลการประเมิน : ${selected}</strong>
  <br>
  <button id='repeat' class='btn'>ประเมินอีกครั้ง</button>
  `;
  const repeat = document.getElementById("repeat");
  repeat.addEventListener("click", () => {
    location.reload();
  });
});
