import axios from 'axios';
import apiKeys from '../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const loadMovie = () => new Promise((resolve, reject) =>
  axios
    .get(`${baseUrl}')/movie.json`)
    .then((result) => {
      const allMovieObject = result.data;
      const allMovieArray = [];
      if (allMovieObject != null) {
        Object.keys(allMovieObject).forEach((movieId) => {
          const newMovie = allMovieObject[movieId];
          newMovie.id = movieId;
          allPlayerArray.push(newMovie);
        });
      }
      resolve(allMovieArray);
    }).catch((err) => {
      reject(err);
    })
);


export default loadMovie;