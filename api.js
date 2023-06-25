// API call

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NWQ3YmUwZWIxOWQyZDhlMTc3OTJjYTY3MjIyNTgxNSIsInN1YiI6IjY0OTU5NjY0ZDIzNmU2MDBjNzc5NThlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gZZRNIGmOU_YF9n6EfyZMvumoadPdHWZaAi3bJ3T9Ys'
    }
  };
  
  
//     fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
//     .then(response => response.json())
//     .then(response => console.log("popular tv",response))
//     .catch(err => console.error(err));
  
  
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
    const urlPosterAPI = `${urlIMG}${response.results[10].poster_path}`
    
    console.log(response.results)
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

createPopularMovieDiv(testeBatata, "teste")
createPopularMovieDiv(testeBatata, "teste")