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
  fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
    .then(response => response.json())
    .then(response => {
      const pathSerie = response.results[indiceTrendingSeries].backdrop_path
      trendingImageSerie.style.backgroundImage = `url(${urlIMG}${pathSerie})`
      console.log(response.results[indiceTrendingSeries])
      h1TitleSerieTrending.innerText = response.results[indiceTrendingSeries].name
      nota.innerText = parseFloat(response.results[indiceTrendingSeries].vote_average).toFixed(1)
      
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

  
//     fetch('https://api.themoviedb.org/3/search/multi?query=supernatural&include_adult=false&language=pt-BR&page=1', options)
//     .then(response => response.json())
//     .then(response => console.log("search",response))
//     .catch(err => console.error(err));
  
  

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
    // const genresDOM = document.querySelectorAll(".genre-item")
    urlAPI = response.results[indiceMovie].backdrop_path
    
    
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
    const carouselItem = document.createElement("div")
    carouselItem.classList.add("carousel-item")
    const h2 = document.createElement("h2")
    h2.innerText = name
    divMovie.style.backgroundImage = `url(${link})`
    divMovie.appendChild(carouselItem)
    divMovie.appendChild(h2)
    carousel4.appendChild(divMovie)
}

// createPopularSeriesDiv(testeBatata, "oi")
// createPopularSeriesDiv(testeBatata, "oi")
