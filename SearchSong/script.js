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

function showData(songs) {
  result.innerHTML = `
     <ul class="songs">
        ${songs.data
          .map(
            (songs) =>
              `
                <li><span>
                <strong>${songs.artist.name}</strong> - ${songs.title}
                </span>
                <button class="btn"
                  data-artist="${songs.artist.name}"
                  data-song="${songs.title}"
                >เนื้อเพลง</button>
                </li>
            `
          )
          .join("")}
          </ul>
    `;
  if (songs.next || songs.prev) {
    more.innerHTML = `
        ${
          songs.prev
            ? `<button class="btn" onclick="getPrevSongs('${songs.prev}')">ก่อนหน้า</button>`
            : ""
        }
        ${
          songs.next
            ? `<button class="btn" onclick="getMoreSongs('${songs.next}')">ถัดไป</button>`
            : ""
        }
      `;
  } else {
    more.innerHTML = "";
  }
}

async function getMoreSongs(songsUrl) {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/${songsUrl}`);

  const allSong = await res.json();

  showData(allSong);
}
async function getPrevSongs(songsUrl) {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/${songsUrl}`);

  const allSong = await res.json();

  showData(allSong);
}

result.addEventListener("click", (e) => {
  const clickEl = e.target;

  if (clickEl.tagName == "BUTTON") {
    const artist = clickEl.getAttribute("data-artist");
    const songName = clickEl.getAttribute("data-song");

    getLyrics(artist, songName);
  }
});

async function getLyrics(artist, songName) {
  const res = await fetch(`${apiUrl}/v1/${artist}/${songName}`);

  const data = await res.json();
  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");

  if (lyrics) {
    result.innerHTML = `<h2><span>
    <strong>${artist}</strong> - ${songName}
    </span></h2>
    <span>${lyrics}</span>
    `;
  } else {
    result.innerHTML = `<h2><span>
    <strong>${artist}</strong> - ${songName}
    </span></h2>
    <span>ไม่มีข้อมูล</span>
    `;
  }
  more.innerHTML = "";
}
