'use strict';


const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
let header = document.querySelector(".header");
///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Cookie Bar /////////////////////////////////

const div = document.createElement("div");
div.classList.add("cookie-message");
div.innerHTML = "We use Cookies for good functionalilty and improved results... <button class='btn btn--close-cookie'>Got it!</button>"

header.append(div);

document.querySelector(".btn--close-cookie").addEventListener("click", () => {
  div.parentElement.removeChild(div);
})

div.style.backgroundColor = "#37383d";
div.style.width = "120%";

div.style.height = Number.parseFloat(getComputedStyle(div).height) + 20 + "px";

//Button Scrolling // learn more Button 

btnScrollTo.addEventListener("click", (e) => {
  section1.scrollIntoView({ behavior: "smooth" })
})

// Page Navigation

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    let id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
})


////
const h1 = document.querySelector("h1");

// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = "orangered"
// h1.lastElementChild.style.color = "blue"

// console.log(h1.parentNode);
// console.log(h1.parentElement);

