const countDownForm = document.getElementById("countDownForm");
const inputContainer = document.getElementById("input-container");
const titleEl = document.getElementById("title");
const dateEl = document.getElementById("date");

const countDownEl = document.getElementById("countdown");
const countdownTitleEl = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("countdown-btn");
const timeEl = document.querySelectorAll("span");

const completeEl = document.getElementById("complete");
const completeTitleEl = document.getElementById("complete-title");
const completeInfoEl = document.getElementById("complete-info");
const completeBtn = document.getElementById("complete-btn");

let countDownTitle = "";
let countDownDate = "";

let countDownValue = Date.now();
let countDownActive;
let saveCountDown;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

countDownForm.addEventListener("submit", updateCountDown);

function updateCountDown(e) {
  e.preventDefault();
  countDownTitle = e.srcElement[0].value;
  countDownDate = e.srcElement[1].value;

  if (countDownTitle === "") {
    alert("ป้อนข้อมูลไม่ครบ");
  } else {
    saveCountDown = { title: countDownTitle, date: countDownDate };
    localStorage.setItem("countDown", JSON.stringify(saveCountDown));
    countDownValue = new Date(countDownDate).getTime();
    setUpTime();
  }
}

function setUpTime() {
  countDownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownValue - now;
    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    inputContainer.hidden = true;

    if (distance < 0) {
      countDownEl.hidden = true;
      completeEl.hidden = false;
      clearInterval(countDownActive);

      completeInfoEl.textContent = `${countDownTitle} วันที่ ${countDownDate}`;
    } else {
      countdownTitleEl.textContent = `${countDownTitle}`;
      timeEl[0].textContent = `${days}`;
      timeEl[1].textContent = `${hours}`;
      timeEl[2].textContent = `${minutes}`;
      timeEl[3].textContent = `${seconds}`;
      countDownEl.hidden = false;
      completeEl.hidden = true;
    }
  }, second);
}

function callDataInStore() {
  if (localStorage.getItem("countDown")) {
    inputContainer.hidden = true;
    saveContDown = JSON.parse(localStorage.getItem("countDown"));
    countDownTitle = saveContDown.title;
    countDownDate = saveContDown.date;
    countDownValue = new Date(countDownDate).getTime();
    setUpTime();
  }
}

function reset() {
  localStorage.removeItem("countDown");
  countDownEl.hidden = true;
  completeEl.hidden = true;
  inputContainer.hidden = false;
  clearInterval(countDownActive);
  countDownTitle = "";
  countDownDate = "";
}

callDataInStore();

countdownBtn.addEventListener("click", reset);
completeBtn.addEventListener("click", reset);
