const header = document.getElementById("header");
const title = document.getElementById("title");
const description = document.getElementById("description");
const profile_img = document.getElementById("profile_img");
const seller_name = document.getElementById("name");
const price = document.getElementById("price");

const animated_bg = document.querySelectorAll(".animated-bg");
const animated_text = document.querySelectorAll(".animated-text");

setTimeout(showContent, 2000);

function showContent() {
  header.innerHTML = `
    <img
          src="https://cdn.pixabay.com/photo/2013/09/21/14/30/sofa-184551__340.jpg"
          alt=""
        />
    `;
  title.innerText = "Sofa";
  price.innerText = "ราคา 22,000 ฿";
  description.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nostrum
  veniam repudiandae? Placeat incidunt sapiente, dolore molestiae odit
  sint? Reiciendis?`;
  profile_img.innerHTML = `
  <img
              src="https://randomuser.me/api/portraits/women/40.jpg"
              alt=""
            />
  `;
  seller_name.innerText = "Emily";

  animated_bg.forEach((el) => el.classList.remove("animated-bg"));
  animated_text.forEach((el) => el.classList.remove("animated-text"));
}
