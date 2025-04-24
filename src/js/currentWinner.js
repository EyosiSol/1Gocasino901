export const CurrentWinners = [
  {
    id: 1,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "W****W",
    time: "15:26PM",
    totalMoney: "$36",
    odd: "x2.35",
  },
  {
    id: 2,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "W****W",
    time: "15:26PM",
    totalMoney: "$36",
    odd: "x2.35",
  },
  {
    id: 3,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "W****W",
    time: "15:26PM",
    totalMoney: "$36",
    odd: "x2.35",
  },
  {
    id: 4,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "W****W",
    time: "15:26PM",
    totalMoney: "$36",
    odd: "x2.35",
  },
  {
    id: 5,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "W****W",
    time: "15:26PM",
    totalMoney: "$36",
    odd: "x2.35",
  },
  {
    id: 6,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "W****W",
    time: "15:26PM",
    totalMoney: "$36",
    odd: "x2.35",
  },
];

export const TodayWinners = [
  {
    id: 1,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "M****M",
    totalMoney: "$45540",
    odd: "x40.56",
  },
  {
    id: 2,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "W*****W",
    totalMoney: "$32000",
    odd: "x25.30",
  },
  {
    id: 3,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "X****W",
    totalMoney: "$15000",
    odd: "x10.50",
  },
  {
    id: 4,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "Y*****Y",
    totalMoney: "$28000",
    odd: "x18.75",
  },
  {
    id: 5,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "Z****Z",
    totalMoney: "$50000",
    odd: "x35.20",
  },
  {
    id: 6,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "A****A",
    totalMoney: "$22000",
    odd: "x15.40",
  },
];

export const bestOdds = [
  {
    id: 1,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "M****M",
    totalMoney: "$45540",
    odd: "x540.56",
  },
  {
    id: 2,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "N****N",
    totalMoney: "$50000",
    odd: "x510.25",
  },
  {
    id: 3,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "O****O",
    totalMoney: "$60000",
    odd: "x520.40",
  },
  {
    id: 4,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "P****P",
    totalMoney: "$70000",
    odd: "x530.15",
  },
  {
    id: 5,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "Q****Q",
    totalMoney: "$80 000",
    odd: "x540.50",
  },
  {
    id: 6,
    bg: "assets/Great27.webp",
    gametitle: "Great 27",
    playerName: "R****R",
    totalMoney: "$90000",
    odd: "x550.75",
  },
];

function renderCurrentWinners(Data, section) {
  console.log("Hi from renderWinner");

  Data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("current-winner-card");
    card.innerHTML = `
        <img src="${item.bg}" alt="card bg">
        <div class="winner-card-content">
            <div class="winner-card-left"> 
                <h3>${item.gametitle}</h3>
                <h5>${item.playerName} &nbsp ${item.time}
                </h5>
            </div>
            <div class="winner-card-right">
                <h5>${item.totalMoney}</h5>
                <h5>${item.odd}</h5>
            </div>
        </div>   
    `;

    section.appendChild(card);
  });
}

function renderTodayWinners(Data, section) {
  console.log("Hi from renderTodayWinner");

  Data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("today-winner-card");

    card.innerHTML = `
          <img src="${item.bg}" alt="card bg">
          <div class="today-card-content">
              <div class="today-card-left"> 
                  <h3>${item.gametitle}</h3>
                  <h5>${item.playerName} 
                  </h5>
              </div>
              <div class="today-card-right">
                  <h5>${item.totalMoney}</h5>
                  <h5>${item.odd}</h5>
              </div>
          </div>   
      `;
    section.appendChild(card);
  });
}

function renderBestOdd(Data, section) {
  console.log("Hi from renderBest");
  Data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("best-odd-card");
    card.innerHTML = `
            <img src="${item.bg}" alt="card bg">
            <div class="best-odd-card-content">
                <div class="best-odd-card-left"> 
                    <h3>${item.gametitle}</h3>
                    <h5>${item.playerName} 
                    </h5>
                </div>
                <div class="best-odd-card-right">
                    <h5>${item.totalMoney}</h5>
                    <h5>${item.odd}</h5>
                </div>
            </div>   
        `;
    section.appendChild(card);
  });
}

export function initNewSection() {
  console.log("Hi from InitNew");

  const currentWinnerContainer = document.querySelector(
    ".current-winner-container"
  );
  const todayWinnerContainer = document.querySelector(
    ".today-winner-container"
  );
  const bestOddContainer = document.querySelector(".best-odd-container");

  renderCurrentWinners(CurrentWinners, currentWinnerContainer);
  renderTodayWinners(TodayWinners, todayWinnerContainer);
  renderBestOdd(bestOdds, bestOddContainer);
}
