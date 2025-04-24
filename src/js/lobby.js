export const newWinnersData = [
  {
    id: 1,
    gameImg: "assets/3Clover.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 2,
    gameImg: "assets/shiningCrown.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 3,
    gameImg: "assets/Great27.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 4,
    gameImg: "assets/burningHot.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 5,
    gameImg: "assets/27Eternal.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 6,
    gameImg: "assets/40Bulky.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 7,
    gameImg: "assets/shiningCrown.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 8,
    gameImg: "assets/Great27.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 9,
    gameImg: "assets/supremeHot.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 10,
    gameImg: "assets/Zeus.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 11,
    gameImg: "assets/27Eternal.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 12,
    gameImg: "assets/Great27.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 13,
    gameImg: "assets/shiningCrown.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 14,
    gameImg: "assets/Great27.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 15,
    gameImg: "assets/shiningCrown.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 16,
    gameImg: "assets/Great27.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 17,
    gameImg: "assets/burningHot.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 18,
    gameImg: "assets/shiningCrown.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 19,
    gameImg: "assets/Great27.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
  {
    id: 20,
    gameImg: "assets/burningHot.webp",
    winnerName: "W***w",
    wonAmount: "$32485",
  },
];

export const popularDataTop = [
  {
    id: 1,
    title: "Shining Crowns",
    bg: "assets/shiningCrown.webp",
  },
  {
    id: 2,
    title: "Supereme Hot",
    bg: "assets/supremeHot.webp",
  },
  {
    id: 3,
    title: "Burning Hot",
    bg: "assets/burningHot.webp",
  },
  {
    id: 4,
    title: "27 Eternal Hot",
    bg: "assets/27Eternal.webp",
  },
  {
    id: 5,
    title: "3 Clover Pots Extra",
    bg: "assets/3Clover.webp",
  },
  {
    id: 6,
    title: "40 Bulky Fruits",
    bg: "assets/40Bulky.webp",
  },
  {
    id: 7,
    title: "100 Power Hot",
    bg: "assets/100Power.webp",
  },
  {
    id: 8,
    title: "Shining Crowns",
    bg: "assets/shiningCrown.webp",
  },
  {
    id: 9,
    title: "Great 27",
    bg: "assets/Great27.webp",
  },
  {
    id: 10,
    title: "Zeus",
    bg: "assets/Zeus.webp",
  },
];

export const popularDataBottom = [
  {
    id: 1,
    title: "Shining Crowns",
    bg: "assets/shiningCrown.webp",
  },
  {
    id: 2,
    title: "Supereme Hot",
    bg: "assets/supremeHot.webp",
  },
  {
    id: 3,
    title: "Burning Hot",
    bg: "assets/burningHot.webp",
  },
  {
    id: 4,
    title: "27 Eternal Hot",
    bg: "assets/27Eternal.webp",
  },
  {
    id: 5,
    title: "3 Clover Pots Extra",
    bg: "assets/3Clover.webp",
  },
  {
    id: 6,
    title: "40 Bulky Fruits ",
    bg: "assets/40Bulky.webp",
  },
  {
    id: 7,
    title: "100 Power Hot",
    bg: "assets/100Power.webp",
  },
  {
    id: 8,
    title: "Shining Crowns",
    bg: "assets/shiningCrown.webp",
  },
  {
    id: 9,
    title: "Great 27",
    bg: "assets/Great27.webp",
  },
  {
    id: 10,
    title: "Zeus",
    bg: "assets/Zeus.webp",
  },
];

function renderWinners(data) {
  const container = document.querySelector(".topwinner-content");
  container.innerHTML = ""; // Clean up in case of re-init

  data.forEach((winner) => {
    const card = document.createElement("div");
    card.classList.add("topwinner-card");
    card.innerHTML = `
        <div class="topwinner-card-img">
          <img src="${winner.gameImg}" alt="Game Image">
        </div>
        <div class="topwinner-card-content">
          <h3>${winner.wonAmount}</h3>
          <p>${winner.winnerName}</p>
        </div>
      `;
    container.appendChild(card);
  });
}
function startInfiniteCarousel() {
  const container = document.querySelector(".topwinner-content");

  let scrollAmount = 0;
  const cardWidth = 110; // card width + gap (adjust if needed)

  setInterval(() => {
    // Move scroll left
    scrollAmount += cardWidth;

    // If we've reached the end, reset
    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
      scrollAmount = 0;
    }

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });

    // Find the card that is about to come into view
    const cardIndex = Math.floor(scrollAmount / cardWidth);
    const targetCard = container.children[cardIndex];

    if (targetCard) {
      targetCard.classList.add("animate-shrink");

      // Remove animation class after it's done so it can re-animate later
      setTimeout(() => {
        targetCard.classList.remove("animate-shrink");
      }, 400);
    }
  }, 2000);
}

export function initWinnersCarousel() {
  renderWinners(newWinnersData);
  startInfiniteCarousel();
}

// export function initPopularCarousel() {
//   const cardSectionTop = document.querySelector(".popular-content-top");
//   const cardSectionBottom = document.querySelector(".popular-content-bottom");

//   renderCards(popularDataTop, cardSectionTop);
//   renderCards(popularDataBottom, cardSectionBottom);
// }

function renderCards(data, section) {
  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("popular-game-card");
    card.innerHTML = `
        <img src="${item.bg}" alt="Card Background">
        <h3>${item.title}</h3>
      `;
    section.appendChild(card);
  });
}

export function initPopularCarousel() {
  const cardSectionTop = document.querySelector(".popular-content-top");
  const cardSectionBottom = document.querySelector(".popular-content-bottom");
  const scrollLeftBtn = document.querySelector(".popular-scroll-btn.left");
  const scrollRightBtn = document.querySelector(".popular-scroll-btn.right");

  // Inject game cards
  renderCards(popularDataTop, cardSectionTop);
  renderCards(popularDataBottom, cardSectionBottom);

  // Scroll amount
  const scrollAmount = 300;

  // Scroll handler
  const scroll = (direction) => {
    const amount = direction === "left" ? -scrollAmount : scrollAmount;
    cardSectionTop.scrollBy({ left: amount, behavior: "smooth" });
    cardSectionBottom.scrollBy({ left: amount, behavior: "smooth" });
  };

  scrollLeftBtn.addEventListener("click", () => scroll("left"));
  scrollRightBtn.addEventListener("click", () => scroll("right"));
}

export const newSectionData = [
  {
    id: 1,
    title: "Shining Crowns",
    bg: "assets/shiningCrown.webp",
  },
  {
    id: 2,
    title: "Supereme Hot",
    bg: "assets/supremeHot.webp",
  },
  {
    id: 3,
    title: "Burning Hot",
    bg: "assets/burningHot.webp",
  },
  {
    id: 4,
    title: "27 Eternal Hot",
    bg: "assets/27Eternal.webp",
  },
  {
    id: 5,
    title: "3 Clover Pots Extra",
    bg: "assets/3Clover.webp",
  },
  {
    id: 6,
    title: "40 Bulky Fruits ",
    bg: "assets/40Bulky.webp",
  },
  {
    id: 7,
    title: "100 Power Hot",
    bg: "assets/100Power.webp",
  },
  {
    id: 8,
    title: "Shining Crowns",
    bg: "assets/shiningCrown.webp",
  },
  {
    id: 9,
    title: "Great 27",
    bg: "assets/Great27.webp",
  },
  {
    id: 10,
    title: "Zeus",
    bg: "assets/Zeus.webp",
  },
];

function renderNewSectionCards(Data, section) {
  Data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("new-game-card");
    card.innerHTML = `
             <img src="${item.bg}" alt="Card Background">
             <h3>${item.title}</h3>
          `;
    section.appendChild(card);
  });
}

export function initNewSectionCarousel() {
  const newSectionScrollContainer = document.querySelector(".new-content");
  const newSectionScrollButton = document.querySelector(".new-scroll-btn.left");
  const newSectionScrollButtonRight = document.querySelector(
    ".new-scroll-btn.right"
  );

  renderNewSectionCards(newSectionData, newSectionScrollContainer);

  newSectionScrollButton.addEventListener("click", () => {
    newSectionScrollContainer.scrollBy({ left: -200, behavior: "smooth" });
  });

  newSectionScrollButtonRight.addEventListener("click", () => {
    newSectionScrollContainer.scrollBy({ left: 200, behavior: "smooth" });
  });
}

export const LiveGames = [
  {
    id: 1,
    title: "Shining Crowns",
    bg: "assets/shiningCrown.webp",
  },
  {
    id: 2,
    title: "Supereme Hot",
    bg: "assets/supremeHot.webp",
  },
  {
    id: 3,
    title: "Burning Hot",
    bg: "assets/burningHot.webp",
  },
  {
    id: 4,
    title: "27 Eternal Hot",
    bg: "assets/27Eternal.webp",
  },
  {
    id: 5,
    title: "3 Clover Pots Extra",
    bg: "assets/3Clover.webp",
  },
  {
    id: 6,
    title: "40 Bulky Fruits ",
    bg: "assets/40Bulky.webp",
  },
  {
    id: 7,
    title: "100 Power Hot",
    bg: "assets/100Power.webp",
  },
  {
    id: 8,
    title: "Shining Crowns",
    bg: "assets/shiningCrown.webp",
  },
  {
    id: 9,
    title: "Great 27",
    bg: "assets/Great27.webp",
  },
  {
    id: 10,
    title: "Zeus",
    bg: "assets/Zeus.webp",
  },
];

function renderLiveGameCards(Data, section) {
  Data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("live-game-card");
    card.innerHTML = `
               <img src="${item.bg}" alt="Card Background">
               <h3>${item.title}</h3>
            `;
    section.appendChild(card);
  });
}

export function initLiveGameCarousel() {
  const LiveSectionCarouselContainer = document.querySelector(".live-content");
  const liveSectionScrollButton = document.querySelector(
    ".live-scroll-btn.left"
  );
  const liveSectionScrollButtonRight = document.querySelector(
    ".live-scroll-btn.right"
  );

  renderLiveGameCards(LiveGames, LiveSectionCarouselContainer);

  liveSectionScrollButton.addEventListener("click", () => {
    LiveSectionCarouselContainer.scrollBy({ left: -200, behavior: "smooth" });
  });

  liveSectionScrollButtonRight.addEventListener("click", () => {
    LiveSectionCarouselContainer.scrollBy({ left: 200, behavior: "smooth" });
  });
}
