import 'bootstrap';
import $ from 'jquery';
import loadMovie from '../helpers/movieGetter';

const writeMovie = (arrayOfMovie) => {
  let domString = '';
  arrayOfMovie.forEach((movie) => {
    domString += `
        <div class="card w-25 m-1 p-0">
          <img class="card-img-top" style="width: 10rem" src="${movie.picture}">
              <div class="card-body"> 
              <h1 class="card-title m-1 text-danger">${movie.Name}</h1>
              <h5 class="card-text m-1">Genre: ${movie.Genre}</h6>
              <p class="card-text m-1">${movie.Description}</p>	
              <h5 class="card-text my-2 text-primary">Number of locations: ${movie.locations.length}</h5>	
              </div>
          <h5 class="card-footer m-1">${movie.Estimated_Release_Date}</h5>
          </div>`;
  });
  $('#movie_description').append(domString);
};


const getMovie = () => {
  loadMovie().then((data) => {
    writeMovie(data);
    console.log(data);
  }).catch((error) => {
    console.error(error);
  });
};

export default getMovie;