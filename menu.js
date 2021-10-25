const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const menu = document.getElementById("menu");
const workLinks = document.querySelectorAll(".link-work");

menuBtn.addEventListener("click", () => menu.classList.add("function"));
closeBtn.addEventListener("click", () => menu.classList.remove("function"));

const displayMix = (event) => {
   const active = document.querySelector(".active");
   active.classList.remove("active");
   event.target.classList.add("active");
};

workLinks.forEach((link) => link.addEventListener("mouseover", displayMix));
