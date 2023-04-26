const carouselIndicators = document.querySelector(".carousel-indicators");
const carouselInner = document.querySelector(".carousel-inner");

import imgArray from "./imgArray.js";

let carouselInnerHTML = "";
let carouselIndicatorsHTML = "";

document.querySelector("#navbarSideCollapse").addEventListener("click", () => {
  document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

imgArray.forEach((carouselImg, index) => {
  console.log(carouselImg.nombre);
  carouselIndicatorsHTML =
    carouselIndicatorsHTML +
    `<button
          style="background-color:white"
          type="button"
          data-bs-target="#main-carousel"
          data-bs-slide-to="${index}"
          aria-label="Slide ${index + 1}"
          class="${carouselImg.buttonClass}"
          ${carouselImg.buttonAriaCurrent}
        ></button>  `;

  carouselInnerHTML =
    carouselInnerHTML +
    `<div class="${carouselImg.class}">
          <img src="${carouselImg.source}" alt="${carouselImg.altText}" loading="lazy"/>
          <div class="carousel-caption text-start">
            <h4>${carouselImg.name}</h4>
            <p>${carouselImg.description}</p>
          </div>
        </div>`;
});

carouselIndicators.innerHTML = carouselIndicatorsHTML;
carouselInner.innerHTML = carouselInnerHTML;
