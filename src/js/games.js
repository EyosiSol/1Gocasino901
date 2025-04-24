const gamesData = [
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
function renderGameCards(data, section) {
  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("games-section-card");
    card.innerHTML = `
                  <img src="${item.bg}" alt="Card Background">
                  <h3>${item.title}</h3>
               `;
    section.appendChild(card);
  });
}

export function instantCarousel() {
  const instantCarouselContainer = document.querySelector(".instant-content");

  const instantScrollButtonLeft = document.querySelector(
    ".instant-scroll-btn.left"
  );
  const instantScrollButtonRight = document.querySelector(
    ".instant-scroll-btn.right"
  );

  renderGameCards(gamesData, instantCarouselContainer);

  instantScrollButtonLeft.addEventListener("click", () => {
    instantCarouselContainer.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  });

  instantScrollButtonRight.addEventListener("click", () => {
    instantCarouselContainer.scrollBy({ left: 200, behavior: "smooth" });
  });
}

export function bonusCarousel() {
  const bonusCarouselContainer = document.querySelector(".bonus-content");

  const bonusScrollButtonLeft = document.querySelector(
    ".bonus-scroll-btn.left"
  );
  const bonusScrollButtonRight = document.querySelector(
    ".bonus-scroll-btn.right"
  );

  renderGameCards(gamesData, bonusCarouselContainer);

  bonusScrollButtonLeft.addEventListener("click", () => {
    bonusCarouselContainer.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  });

  bonusScrollButtonRight.addEventListener("click", () => {
    bonusCarouselContainer.scrollBy({ left: 200, behavior: "smooth" });
  });
}

export function megawaysCarousel() {
  const megawaysCarouselContainer = document.querySelector(".megaways-content");

  const megawaysScrollButtonLeft = document.querySelector(
    ".megaways-scroll-btn.left"
  );
  const megawaysScrollButtonRight = document.querySelector(
    ".megaways-scroll-btn.right"
  );

  renderGameCards(gamesData, megawaysCarouselContainer);

  megawaysScrollButtonLeft.addEventListener("click", () => {
    megawaysCarouselContainer.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  });

  megawaysScrollButtonRight.addEventListener("click", () => {
    megawaysCarouselContainer.scrollBy({ left: 200, behavior: "smooth" });
  });
}

export function initGamesCarousel() {
  instantCarousel();
  bonusCarousel();
  megawaysCarousel();
}
