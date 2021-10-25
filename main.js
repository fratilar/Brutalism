// Slider JS

const swiper = new Swiper(".swiper", {
   // Optional parameters
   direction: "vertical",
   effect: "fade",
   fadeEffect: {
      crossFade: true,
   },
   loop: true,
   autoplay: {
      delay: 8000,
      disableOnInteraction: false,
   },

   // Pagination bullets
   pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
   },
});
// End of Slider JS

const workLinks = document.querySelectorAll(".link-work");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const menu = document.getElementById("menu");

const displayMix = (event) => {
   const active = document.querySelector(".active");
   active.classList.remove("active");
   event.target.classList.add("active");

   let img = document.getElementById("work-img");
   if (event.target.innerText === "Margarita") {
      img.src = "./images/margaritas.png";
   }
   if (event.target.innerText === "Toasts") {
      img.src = "./images/toasts.png";
   }
   if (event.target.innerText === "Avocado Club") {
      img.src = "./images/work_avocado.png";
   }
   if (event.target.innerText === "Pancakes") {
      img.src = "./images/pancakes.png";
   }
   if (event.target.innerText === "Figs Fever") {
      img.src = "./images/blue.png";
   }
};

workLinks.forEach((link) => link.addEventListener("mouseover", displayMix));

menuBtn.addEventListener("click", () => menu.classList.add("function"));
closeBtn.addEventListener("click", () => menu.classList.remove("function"));
