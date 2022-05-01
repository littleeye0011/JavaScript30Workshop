const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiUrl = "https://api.lyrics.ovh/";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const songText = search.value.trim();

  if (!songText) {
    alert("Please enter Text");
  } else {
    searchLyrics(songText);
  }
});

async function searchLyrics(songs) {
  const res = await fetch(`${apiUrl}/suggest/${songs}`);

  const allSong = await res.json();

  showData(allSong);
}

function showData(song) {
  result.innerHTML = `
     <ul class="songs">
        ${song.data
          .map(
            (song) =>
              `
                <li><span>
                <strong>${song.artist.name}</strong> - ${song.title}
                </span>
                <button class="btn">เนื้อเพลง</button>
                </li>
            `
          )
          .join("")}
          </ul>
    `;
}
