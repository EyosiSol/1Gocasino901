import {
  gamesData,
  renderGameCards,
  uppderData,
  renderCards,
} from "./JackPot.js"; // named import

import {
  initWinnersCarousel,
  initPopularCarousel,
  initNewSectionCarousel,
  initLiveGameCarousel,
} from "./lobby.js";

// const data = [
//   {
//     id: 1,
//     top: "Sports",
//     title: "SPORTS BETTING",
//     middle: "Bonuses, Promotions,Live Broadcasts",
//     button: "To Sportsbook",
//     background: "",
//   },
//   {
//     id: 2,
//     top: "Casino Bonus",
//     title: "UP TO 300$",
//     middle: "For Your First Deposit",
//     button: "Claim Now",
//     background: "",
//   },
//   {
//     id: 3,
//     top: "Sports Bonus",
//     title: "WELCOME BONUS GET UP TO 100$",
//     middle: "For sports betting",
//     button: "Claim Now",
//     background: "",
//   },
//   {
//     id: 4,
//     top: "Promotion",
//     title: "$810 000 & UP BGAMING DROPS JOIN FRENZY",
//     middle: "",
//     button: "Learn More",
//     background: "",
//   },
//   {
//     id: 5,
//     top: "Promotion",
//     title: "$24 000 000 DROPS & WINS SLOTS",
//     middle: "",
//     button: "Play Now",
//     background: "",
//   },
// ];

// const topCarousel = document.querySelector(".dataslides");

// data.forEach((item) => {
//   const listItem = document.createElement("li");
//   listItem.classList.add("slide");
//   listItem.id = item.id;
//   listItem.style.backgroundImage = `url(${item.background})`;
//   listItem.style.backgroundSize = "cover";
//   listItem.innerHTML = `
//         <ol class="top-carousel__item-top">${item.top}</ol>
//         <ol class="top-carousel__item-title">${item.title}</ol>
//         <ol class="top-carousel__item-middle">${item.middle}</ol>
//         <button class="top-carousel__item-button">${item.button}</button>
// `;
//   topCarousel.appendChild(listItem);
// });

// const firstSlide = topCarousel.querySelector("li");
// if (firstSlide) {
//     firstSlide.setAttribute("data-active", "true");
// }

console.log("topCarousel.pug");

console.log("topCarousel.pug");

const buttons = document.querySelectorAll("[data-carousel-button]");
const indicators = document.querySelectorAll(".indicator");
const indicatorFills = document.querySelectorAll(".indicator-fill");
const slidesContainer = document.querySelector("[data-slides]");
const slides = slidesContainer.children;

let currentIndex = [...slides].findIndex((slide) =>
  slide.hasAttribute("data-active")
);

function updateIndicators(index) {
  indicators.forEach((indicator, i) => {
    const fill = indicator.querySelector(".indicator-fill");
    indicator.classList.toggle("active", i === index);
    fill?.classList.toggle("active", i === index);
  });
}

function goToSlide(index) {
  slides[currentIndex].removeAttribute("data-active");
  slides[index].setAttribute("data-active", "true");
  currentIndex = index;
  updateIndicators(index);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    let newIndex = currentIndex + offset;

    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;

    goToSlide(newIndex);
  });
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    goToSlide(index);
  });
});

setInterval(() => {
  let nextIndex = currentIndex + 1;
  if (nextIndex >= slides.length) nextIndex = 0;
  goToSlide(nextIndex);
}, 3000);

// Side Carousel Effect

const sideCarouselButtons = document.querySelectorAll(
  "[data-side-carousel-button]"
);
const sideSlidesContainer = document.querySelector("[data-side-slides]");
const sideSlides = sideSlidesContainer.children;

let currentSideIndex = 0;

function updateSlidePosition() {
  const offset = -currentSideIndex * 100;
  sideSlidesContainer.style.transform = `translateX(${offset}%)`;
}

sideCarouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.sideCarouselButton === "next" ? 1 : -1;
    currentSideIndex =
      (currentSideIndex + offset + sideSlides.length) % sideSlides.length;
    updateSlidePosition();
  });
});

setInterval(() => {
  currentSideIndex = (currentSideIndex + 1) % sideSlides.length;
  updateSlidePosition();
}, 2500);

//Jackpot section

console.log("jackpot data:", uppderData);
const cardSection = document.querySelector(".upperCards");

renderCards(uppderData, cardSection);

const scrollContainer = document.querySelector(".upperCards");
const scrollLeftBtn = document.querySelector(".scroll-left");
const scrollRightBtn = document.querySelector(".scroll-right");

const scrollAmount = 300;

scrollLeftBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -scrollAmount,
    behavior: "smooth",
  });
});

scrollRightBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: scrollAmount,
    behavior: "smooth",
  });
});

function updateButtonVisibility() {
  scrollLeftBtn.style.display =
    scrollContainer.scrollLeft <= 0 ? "none" : "flex";
  scrollRightBtn.style.display =
    scrollContainer.scrollLeft + scrollContainer.clientWidth >=
    scrollContainer.scrollWidth
      ? "none"
      : "flex";
}

scrollContainer.addEventListener("scroll", updateButtonVisibility);
updateButtonVisibility(); // Initial check

// const gamesSection = document.querySelector(".jackpot-content");

// renderGameCards(gamesData, gamesSection);
// Initialize the carousel
const gamesSection = document.querySelector(".jackpot-content");
renderGameCards(gamesData, gamesSection);

const jackpotgamesScrollContainer = document.querySelector(".jackpot-content");
const jackpotgamesScrollButton = document.querySelector(".scroll-btn.left");
const jackpotgamesScrollButtonRight =
  document.querySelector(".scroll-btn.right");

jackpotgamesScrollButton.addEventListener("click", () => {
  jackpotgamesScrollContainer.scrollBy({ left: -200, behavior: "smooth" });
});

jackpotgamesScrollButtonRight.addEventListener("click", () => {
  jackpotgamesScrollContainer.scrollBy({ left: 200, behavior: "smooth" });
});

// Initialize the winners section
initWinnersCarousel();

initPopularCarousel();

initNewSectionCarousel();

initLiveGameCarousel();
