export const booksofcollection = [
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

function renderbooksofcollectioncard(Data, section) {
  Data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("books-collection-card");
    card.innerHTML = `
                 <img src="${item.bg}" alt="Card Background">
                 <h3>${item.title}</h3>
              `;
    section.appendChild(card);
  });
}

export function initbooksofcollection() {
  const bookCollectionCarouselContainer =
    document.querySelector(".books-content");
    console.log();
    
  const bookCollectionScrollButton = document.querySelector(
    ".books-scroll-btn.left"
  );
  const bookCollectionScrollButtonRight = document.querySelector(
    ".books-scroll-btn.right"
  );

  renderbooksofcollectioncard(
    booksofcollection,
    bookCollectionCarouselContainer
  );

  bookCollectionScrollButton.addEventListener("click", () => {
    bookCollectionCarouselContainer.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  });

  bookCollectionScrollButtonRight.addEventListener("click", () => {
    bookCollectionCarouselContainer.scrollBy({ left: 200, behavior: "smooth" });
  });
}
