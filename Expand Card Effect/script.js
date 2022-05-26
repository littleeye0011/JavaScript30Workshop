const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      removeActive();
      item.classList.add("active");
    }
  });
});

function removeActive() {
  items.forEach((item) => {
    item.classList.remove("active");
  });
}
