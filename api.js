// API call
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWQ3YmUwZWIxOWQyZDhlMTc3OTJjYTY3MjIyNTgxNSIsInN1YiI6IjY0OTU5NjY0ZDIzNmU2MDBjNzc5NThlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gZZRNIGmOU_YF9n6EfyZMvumoadPdHWZaAi3bJ3T9Ys'
  }
};
const indiceTrendingSeries = Math.floor(Math.random() * 21)
const trendingImageSerie = document.querySelector(".trending-img-poster")
const h1TitleSerieTrending = trendingImageSerie.querySelector("h1")
const nota = document.querySelector(".nota-number")
fetch('https://api.themoviedb.org/3/trending/tv/day?language=pt-BR', options)
  .then(response => response.json())
  .then(response => {
    const pathSerie = response.results[indiceTrendingSeries].backdrop_path
    trendingImageSerie.style.backgroundImage = `url(${urlIMG}${pathSerie})`
    h1TitleSerieTrending.innerText = response.results[indiceTrendingSeries].name
    nota.innerText = parseFloat(response.results[indiceTrendingSeries].vote_average).toFixed(1)
    document.addEventListener("click", (e)=>{
      const target = e.target
      const h2Target = target.querySelector("h2").innerText
      response.results.forEach((e)=>{
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        console.log(e)
        if(e.name == h2Target){
          console.log(e)
          const title = e.original_name
          const nota = Number(e.vote_average).toFixed(1)
          const data = e.release_date
          const desc = e.overview
          const url = `${urlIMG}${e.poster_path}`
          createPopup(title, nota, data, desc, url, main)
        }
      })
    })

    response.results.forEach((e, i)=>{
      if(i <= 9){
        const posterPathSerie = e.poster_path
        createPopularSeriesDiv(`${urlIMG}${posterPathSerie}`, e.name)

      }
      if(i >9 && i <= 19){
        const posterPathSerie = e.poster_path
        createPopularSeriesDiv2(`${urlIMG}${posterPathSerie}`, e.name)

      }
    })
  })
  .catch(err => console.error(err));

//Seleção de variáveis DOM
const popularCarouselContainer1 = document.querySelector(".carousel-container")
const carousel1 = popularCarouselContainer1.querySelector(".carousel")
const urlIMG = "https://image.tmdb.org/t/p/original";
let urlAPI;
let movieId;
const divGenre = document.querySelector(".genre")
const indiceImg = Math.floor(Math.random() * 6)
fetch('https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1', options)
.then(response => response.json())
.then(response => {
  const indiceMovie = Math.floor(Math.random() * 21)
  movieId = response.results[indiceMovie].id;
  urlAPI = response.results[indiceMovie].backdrop_path
  document.addEventListener("click", (e)=>{
    
    const target = e.target
    const h2Target = target.querySelector("h2").innerText
    response.results.forEach((e)=>{
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      if(e.original_title == h2Target){
        console.log(e)
        const title = e.original_title
        const nota = Number(e.vote_average).toFixed(1)
        const data = e.release_date
        const desc = e.overview
        const url = `${urlIMG}${e.poster_path}`
        createPopup(title, nota, data, desc, url, main)
      }
    })
  })
  
  response.results.forEach((e, index)=>{
    if(index <= 9){
      const pathPoster = e.poster_path
      createPopularMovieDiv(`${urlIMG}${pathPoster}`, e.original_title)
    }
    if(index >9 && index <= 19){
      const pathPoster = e.poster_path
      createPopularMovieDiv2(`${urlIMG}${pathPoster}`, e.original_title)

    }
  })
  const header = document.querySelector('header'); 
  header.style.backgroundImage = `url(${urlIMG}${urlAPI})`
  const headerTitle = document.querySelector(".header-title")
  const nameMovie = response.results[indiceMovie].original_title
  headerTitle.innerHTML = nameMovie
  const genres = response.results[indiceMovie].genre_ids
  genres.forEach((e)=>{
      
      fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options) //
  .then(response => response.json())
  .then(response => {
  response.genres.forEach((element)=>{
    if(element.id == e) {
        const genreName = element.name
        createGenreDiv(genreName)
    }
})
})
.catch(err => console.error(err));
  })
})

let testeBatata = "https://image.tmdb.org/t/p/original/weNAoAo7MvEWG9lhH4Y4llxs1yb.jpg"


function createGenreDiv(name){
  const div = document.createElement("div")
  div.classList.add("glass")
  div.classList.add("genre-item")
  div.innerText = name
  divGenre.appendChild(div)
}

function createPopularMovieDiv(link, name){
  const divMovie = document.createElement("div")
  divMovie.classList.add("container-carousel-item")
  divMovie.classList.add("movieIdentifier")

  const carouselItem = document.createElement("div")
  carouselItem.classList.add("carousel-item")
  const h2 = document.createElement("h2")
  h2.innerText = name
  divMovie.style.backgroundImage = `url(${link})`
  divMovie.appendChild(carouselItem)
  divMovie.appendChild(h2)
  carousel1.appendChild(divMovie)
}
function createPopularMovieDiv2(link, name){
  const divMovie = document.createElement("div")
  divMovie.classList.add("container-carousel-item")
  divMovie.classList.add("movieIdentifier")
  const carouselItem = document.createElement("div")
  carouselItem.classList.add("carousel-item")
  const h2 = document.createElement("h2")
  h2.innerText = name
  divMovie.style.backgroundImage = `url(${link})`
  divMovie.appendChild(carouselItem)
  divMovie.appendChild(h2)
  carousel2.appendChild(divMovie)
}
function createPopularSeriesDiv(link, name){
  const divMovie = document.createElement("div")
  divMovie.classList.add("container-carousel-item")
  divMovie.classList.add("serieIdentifier")
  const carouselItem = document.createElement("div")
  carouselItem.classList.add("carousel-item")
  const h2 = document.createElement("h2")
  h2.innerText = name
  divMovie.style.backgroundImage = `url(${link})`
  divMovie.appendChild(carouselItem)
  divMovie.appendChild(h2)
  carousel3.appendChild(divMovie)
}
function createPopularSeriesDiv2(link, name){
  const divMovie = document.createElement("div")
  divMovie.classList.add("container-carousel-item")
  divMovie.classList.add("serieIdentifier")

  const carouselItem = document.createElement("div")
  carouselItem.classList.add("carousel-item")
  const h2 = document.createElement("h2")
  h2.innerText = name
  divMovie.style.backgroundImage = `url(${link})`
  divMovie.appendChild(carouselItem)
  divMovie.appendChild(h2)
  carousel4.appendChild(divMovie)
}
const body = document.querySelector("body")
function createPopup(titulo, nota, data, desc,linkiMG, fatherElement){
  const popup = document.createElement("div")
  const containerPopup = document.createElement("div")
  const imagePopupContainer = document.createElement("div")
  const imagePopup = document.createElement("div")
  const infoPopup = document.createElement("div")
  const titlePopup = document.createElement("h1")
  const notaPopup = document.createElement("h2")
  const datePopup = document.createElement("h2")
  const description = document.createElement("p")

  popup.classList.add("popup")
  popup.classList.add("outside")
  containerPopup.classList.add("container-popup")
  imagePopupContainer.classList.add("image-popup")
  imagePopup.classList.add("image")
  infoPopup.classList.add("info-popup")
  titlePopup.classList.add("title-popup")
  notaPopup.classList.add("notas-popup")
  datePopup.classList.add("date-popup")
  description.classList.add("desc-popup")


  popup.classList.remove("hide")
  body.style.overflow = "hidden"
  imagePopup.style.backgroundImage = `url(${linkiMG})`
  titlePopup.innerText = `Title: ${titulo}`
  notaPopup.innerText = `Avaliação: ${nota}`
  datePopup.innerText = `Data: ${data}`
  description.innerText = `"${desc}"`
  const faX = document.createElement("i")
  faX.classList.add("fa-x")
  faX.addEventListener("click", ()=>{
    popup.classList.add("hide")
    body.style.overflowY = "auto"
  })
  popup.appendChild(containerPopup)
  containerPopup.appendChild(imagePopupContainer)
  imagePopupContainer.appendChild(imagePopup)
  containerPopup.appendChild(infoPopup)
  infoPopup.appendChild(titlePopup)
  infoPopup.appendChild(notaPopup)
  infoPopup.appendChild(datePopup)
  infoPopup.appendChild(description)
  containerPopup.appendChild(faX)
  fatherElement.appendChild(popup)
  document.addEventListener("click", (e)=>{
    const target = e.target
    if(target.classList.contains("outside")){
      popup.classList.add("hide")
      body.style.overflowY = "auto"
    }
    })
}
const handleFormSubmit = (e, inputSearch) => {
e.preventDefault();
const value = inputSearch.value;
results.innerHTML = ""

fetch(`https://api.themoviedb.org/3/search/multi?query=${value}&include_adult=false&language=pt-BR&page=1`, options)
  .then(response => response.json())
  .then(response => {
    inputSearch.value = ""
    // console.log(response)
    document.addEventListener("click", (e)=>{
        const target = e.target
        const h1 = target.querySelector("h1").innerText
        const pID = target.querySelector("p").innerHTML
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        response.results.forEach((e)=>{
          if(e.id == pID){
            console.log(e)
            const title = e.title || e.original_name || e.original_title
            const overview = e.overview
            const url = `${urlIMG}${e.poster_path}`
            const nota = Number(e.vote_average).toFixed(1)
            const data = e.first_air_date || "não encontrada"
            createPopup(title, nota, data, overview, url, searchContainer)
            
          }
        })
      })
    response.results.forEach((e)=>{
      const title = e.title
      const name = e.original_name
      const titleOriginal = e.original_title
      const imageLink = e.backdrop_path
      const searchId = e.id
      header.classList.add("hide")
      main.classList.add("hide")
      searchContainer.classList.remove("hide")
      if(imageLink){
        createSearchResults(title || name || titleOriginal, imageLink, searchId)
      }
    })
  })
  .catch(err => console.error(err));
  
};

const searchContainer = document.querySelector(".search-container")
const main = document.querySelector("main")
const header = document.querySelector("header")
const results = document.querySelector(".results")
const inputSearchContainer = document.querySelector(".input-search-container");
const form = inputSearchContainer.querySelector("form");
const inputSearch = document.querySelector(".input-search");
form.addEventListener("submit", e => handleFormSubmit(e, inputSearch));
const inputSearchContainer2 = document.querySelector(".input-search-container-2");
const form2 = inputSearchContainer2.querySelector("form");
const inputSearch2 = document.querySelector(".input-search-2");
form2.addEventListener("submit", e => handleFormSubmit(e, inputSearch2));
function createSearchResults(title, link, id){
let searchId = document.createElement("p")
searchId.innerText = id
const resultItem = document.createElement("div")
const titleItem = document.createElement("h1")
titleItem.innerText = title
resultItem.classList.add("item-search")
titleItem.classList.add("title-search")
resultItem.style.backgroundImage = `url(${urlIMG}${link})`
resultItem.appendChild(titleItem)
resultItem.appendChild(searchId)
results.appendChild(resultItem)
}
const arrowBack = document.querySelector(".fa-arrow-left-long")
arrowBack.addEventListener("click", ()=>{
results.innerHTML = ""
searchContainer.classList.add("hide")
header.classList.remove("hide")
main.classList.remove("hide")
})