import firebase from 'firebase';
import apiKeys from '../db/apiKeys.json';
import getMovie from './components/movieComponent';
import getLocations from './components/movieComponent';
import { searchMovie, filterCards } from './events.js';

const test = () => {
  alert('Hi');
};

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  test();
  getMovie();
  getLocations();
  searchMovie();
  filterCards();
};

initializeApp();