const wordEl = document.getElementById("word");
const textEl = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");

const btnLevelEl = document.getElementById("level-btn");
const settingsEl = document.getElementById("settings");
const levelFormEl = document.getElementById("level-form");
const levelEl = document.getElementById("level");
const gameoverEl = document.getElementById("gameover-container");

const words = [
  "ตีงูหลังหัก",
  "เข็นครก",
  "ตำน้ำพริก",
  "แม่น้ำ",
  "ฝนตก",
  "หน้าแล้ง",
  "ไฟไหม้",
  "ลำโพง",
  "อิ่มท้อง",
  "น้องสาว",
  "หมาหน้าแมว",
];

let randomText;
let score = 0;
let time = 20;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
  randomText = getRandomWord();
  wordEl.innerHTML = randomText;
}

displayWord();
