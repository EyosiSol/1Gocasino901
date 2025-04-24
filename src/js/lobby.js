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
