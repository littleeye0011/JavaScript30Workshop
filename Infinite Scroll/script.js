const count = 10;
const apiKey = "6rB425MBqM5tEtRUMVn8j-tcQcGueFo1FLGPrlBoUXs";
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

const imgContainer = document.getElementById("container");
let photoArr = [];
let page = 1;

async function getPhoto() {
  try {
    const response = await fetch(apiUrl);
    photoArr = await response.json();
    displayImage();
  } catch (err) {
    console.log(err);
  }
}

function displayImage() {
  photoArr.forEach((photo) => {
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("title", photo.alt_description);
    img.setAttribute("alt", photo.alt_description);

    item.appendChild(img);
    imgContainer.appendChild(item);
  });
}

getPhoto();

window.addEventListener("scroll", () => {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 20) {
    getPhoto();
  }
});
