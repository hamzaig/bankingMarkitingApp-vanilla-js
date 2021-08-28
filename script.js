'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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


let header = document.querySelector(".header");
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


const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

console.log(btnScrollTo, section1);

