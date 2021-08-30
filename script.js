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

//Tabs 

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", function (e) {
  let clicked = e.target.closest(".operations__tab");
  if (!clicked) return; //Guard Clause

  tabs.forEach(el => el.classList.remove("operations__tab--active"));
  tabsContent.forEach(el => el.classList.remove("operations__content--active"));

  clicked.classList.add("operations__tab--active");
  console.log(clicked.dataset.tab);
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active");
})

//Menu Fade Animation

const nav = document.querySelector("nav");

function menuFade(e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const img = link.closest(".nav").querySelector("img");
    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    img.style.opacity = this;
  }
}

nav.addEventListener("mouseover", menuFade.bind(0.5))
nav.addEventListener("mouseout", menuFade.bind(1))

// Sticky Navbar
const headerForNav = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(headerForNav);