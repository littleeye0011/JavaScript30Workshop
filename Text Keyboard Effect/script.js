const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = "Hello World 1 2 3 4 5 6 7 8 9 10";

let speed = 500 / speedEl.value;

let characterId = 1;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, characterId);
  characterId++;

  if (text.length < characterId) {
    characterId = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => {
  speed = 500 / e.target.value;
});
