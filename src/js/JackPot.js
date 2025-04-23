export const uppderData = [
  {
    id: "1",
    money: "$139909",
    amount: "8",
    bg: "assets/playinGo.svg",
  },
  {
    id: "2",
    money: "Jackpot",
    amount: "1",
    bg: "assets/3OAKS.svg",
  },
  {
    id: "3",
    money: "Jackpot",
    amount: "243",
    bg: "assets/amusnet.svg",
  },
  {
    id: "4",
    money: "$573181",
    amount: "10",
    bg: "assets/belatra.svg",
  },
  {
    id: "5",
    money: "$365437",
    amount: "8",
    bg: "assets/yggdrasil.svg",
  },
  {
    id: "6",
    money: "$1722576",
    amount: "19",
    bg: "assets/betsoft.svg",
  },
  {
    id: "7",
    money: "Jackpot",
    amount: "2",
    bg: "assets/kalamba.svg",
  },
  {
    id: "8",
    money: "$15704398",
    amount: "21",
    bg: "assets/Ggames.svg",
  },
  {
    id: "9",
    money: "Jackpot",
    amount: "1",
    bg: "assets/foxium.svg",
  },
  {
    id: "10",
    money: "Jackpot",
    amount: "1",
    bg: "assets/fortune.svg",
  },
];

export const gamesData = [
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
    title: "40 Bulky Fruits 6 Reels",
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

export function renderCards(Data, cardSection) {
  Data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
            <img src="${item.bg}" alt="Card Background">
            <div class="card-content">
                <div class="upper-element">
                    <p>${item.money}</p>
                    <p>${item.amount}</p>
                </div>
                <div class="lower-element">
                    <p>Jackpot</p>
                    <p>Games</p>
                </div>
            </div>

            
        `;

    cardSection.appendChild(card);
  });
}

export function renderGameCards(Data, section) {
  Data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerHTML = `
       <img src="${item.bg}" alt="Card Background">
       <h3>${item.title}</h3>
    `;
    section.appendChild(card);
  });
}
