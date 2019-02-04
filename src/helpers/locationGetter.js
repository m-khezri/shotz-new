import axios from 'axios';
import apiKeys from '../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const loadLocations = () => new Promise((resolve, reject) =>
  axios
    .get(`${baseUrl}')/locations.json`)
    .then((result) => {
      const allLocationObject = result.data;
      const allLocationArray = [];
      if (allLocationObject != null) {
        Object.keys(allLocationObject).forEach((locationId) => {
          const newLocation = allLocationObject[locationId];
          newLocation.id = locationId;
          allLocationArray.push(newLocation);
        });
      }
      resolve(allLocationArray);
    }).catch((err) => {
      reject(err);
    })
);

export default loadLocations;