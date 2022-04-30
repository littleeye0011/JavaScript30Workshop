const switchToggle = document.querySelector("input[type='checkbox']");
const toggleIcon = document.getElementById("toggle-icon");
const nav = document.getElementById("nav");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

function switchMode(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode();
    imageSwitch("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode();
    imageSwitch("light");
  }
}

function darkMode() {
  toggleIcon.children[0].textContent = "โหมดกลางคืน";
  toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
  nav.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

function imageSwitch(mode) {
  image1.src = `img/undraw_in_sync_${mode}.svg`;
  image2.src = `img/undraw_programming_${mode}.svg`;
  image3.src = `img/undraw_gaming_${mode}.svg`;
}

function lightMode() {
  toggleIcon.children[0].textContent = "โหมดกลางวัน";
  toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  nav.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
}

switchToggle.addEventListener("change", switchMode);
