import 'bootstrap';
import $ from 'jquery';
import loadLocations from '../helpers/locationGetter';

const writeLocations = (arrayOfLocations) => {
  let domString = '';
  arrayOfLocations.forEach((locations) => {
    domString += `
    	<div class="movieLoc card w-25 m-2 p-0" style="min-width: 300px;">
		  <h6 class="card-header bg-warning text-center">${locations.name}</h6>
          <img class="mw-100 mh-100" src="${locations.location_image}">
          <p class="card-address card-body text-center">${locations.location}</p>
		  <p class="locationTime card-footer text-center font-weight-bold">${locations.shoot_time}</p>
		</div>`;
  });
  $('#movie_info').append(domString);
};

const getLocations = () => {
  loadLocations().then((data) => {
    writeLocations(data);
  }).catch((error) => {
    console.error(error);
  });
};

export { getLocations };
