const carouselIndicators = document.querySelector(".carousel-indicators");
const carouselInner = document.querySelector(".carousel-inner");

import imgArray from "./imgArray.js";

let carouselInnerHTML = "";
let carouselIndicatorsHTML = "";

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
