const carouselIndicators = document.querySelector(".carousel-indicators");
const carouselInner = document.querySelector(".carousel-inner");

let carouselInnerHTML = "";
let carouselIndicatorsHTML = "";

const imgArray = [
  {
    class: "carousel-item active",
    source: "./images/Banner.jpg",
    altText: "Under Construction",
    buttonClass: "active",
    buttonAriaCurrent: 'aria-current="true"',
  },
  {
    class: "carousel-item",
    source: "./images/U-StuffBBlackSmith.png",
    altText: "U-StuffBlackSmith",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    class: "carousel-item",
    source: "./images/U-StuffWCarpenter.png",
    altText: "StuffWCarpenter",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    class: "carousel-item",
    source: "./images/U-StuffBCook.png",
    altText: "U-StuffBCook",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    class: "carousel-item",
    source: "./images/U-StuffWGarden.png",
    altText: "U-StuffWGarden",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    class: "carousel-item",
    source: "./images/U-StuffBHome.png",
    altText: "U-StuffBHome",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    class: "carousel-item",
    source: "./images/U-StuffWPets.png",
    altText: "U-StuffWPets",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
  {
    class: "carousel-item",
    source: "./images/U-StuffBTech.png",
    altText: "U-StuffBTech",
    buttonClass: "",
    buttonAriaCurrent: "",
  },
];

imgArray.forEach((carouselImg, index) => {
  carouselIndicatorsHTML =
    carouselIndicatorsHTML +
    `<button
          style="background-color:purple"
          type="button"
          data-bs-target="#main-carousel"
          data-bs-slide-to="${index}"
          aria-label="Slide ${index + 1}"
          class="${carouselImg.buttonClass}"
          ${carouselImg.buttonAriaCurrent}
        ></button>`;

  carouselInnerHTML =
    carouselInnerHTML +
    `<div class="${carouselImg.class}">
          <img src="${carouselImg.source}" alt="${carouselImg.altText}" />
        </div>`;
});

carouselIndicators.innerHTML = carouselIndicatorsHTML;
// console.log(carouselIndicatorsHTML);
carouselInner.innerHTML = carouselInnerHTML;
