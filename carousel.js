//carousel effect

function setupCarousel(carouselElement, prevButton, nextButton) {
  nextButton.addEventListener('click', () => {
    const scrollWidth = carouselElement.scrollWidth;
    const containerWidth = carouselElement.offsetWidth;
    const maxScrollLeft = scrollWidth - containerWidth;

    if (carouselElement.scrollLeft >= maxScrollLeft) {
      carouselElement.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      carouselElement.scrollBy({
        left: 250,
        behavior: 'smooth'
      });
    }
  });

  prevButton.addEventListener('click', () => {
    carouselElement.scrollBy({
      left: -250,
      behavior: 'smooth'
    });
  });
}

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

setupCarousel(carousel, prevBtn, nextBtn);

const carousel2 = document.querySelector('.carousel-2'); // Seleciona o segundo carrossel
const prevBtn2 = document.querySelector('.prev-btn-2'); // Seleciona o segundo botão de anterior
const nextBtn2 = document.querySelector('.next-btn-2'); // Seleciona o segundo botão de próxima

setupCarousel(carousel2, prevBtn2, nextBtn2);

const carousel3 = document.querySelector('.carousel-3'); // Seleciona o segundo carrossel
const prevBtn3 = document.querySelector('.prev-btn-3'); // Seleciona o segundo botão de anterior
const nextBtn3 = document.querySelector('.next-btn-3'); // Seleciona o segundo botão de próxima

setupCarousel(carousel3, prevBtn3, nextBtn3);

const carousel4 = document.querySelector('.carousel-4'); // Seleciona o segundo carrossel
const prevBtn4 = document.querySelector('.prev-btn-4'); // Seleciona o segundo botão de anterior
const nextBtn4 = document.querySelector('.next-btn-4'); // Seleciona o segundo botão de próxima

setupCarousel(carousel4, prevBtn4, nextBtn4);
