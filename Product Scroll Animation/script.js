const categories = document.querySelectorAll(".category");

window.addEventListener("scroll", showCategory, false);

function showCategory() {
  const calculateHeight = window.innerHeight - 100;

  categories.forEach((category) => {
    const topPosition = category.getBoundingClientRect().top;
    if (topPosition < calculateHeight) {
      category.classList.add("active");
    } else {
      category.classList.remove("active");
    }
  });
}
