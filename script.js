// API call

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWQ3YmUwZWIxOWQyZDhlMTc3OTJjYTY3MjIyNTgxNSIsInN1YiI6IjY0OTU5NjY0ZDIzNmU2MDBjNzc5NThlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gZZRNIGmOU_YF9n6EfyZMvumoadPdHWZaAi3bJ3T9Ys'
  }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', options)
  .then(response => response.json())
  .then(response => console.log("popular movie",response))
  .catch(err => console.error(err));

  fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log("popular tv",response))
  .catch(err => console.error(err));


  fetch('https://api.themoviedb.org/3/search/multi?query=supernatural&include_adult=false&language=pt-BR&page=1', options)
  .then(response => response.json())
  .then(response => console.log("search",response))
  .catch(err => console.error(err));


  
fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
.then(response => response.json())
.then(response => console.log("genre",response))
.catch(err => console.error(err));

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
