const card = document.querySelector(".card");
const showBtn = document.getElementById("show");
const hiddenBtn = document.getElementById("btn-hidden");
const addContainer = document.getElementById("add-container");

card.addEventListener("click", () => {
  card.classList.toggle("show-answer");
});

showBtn.addEventListener("click", () => {
  addContainer.classList.add("show");
});

hiddenBtn.addEventListener("click", () => {
  addContainer.classList.remove("show");
});
