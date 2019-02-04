import firebase from 'firebase';
import apiKeys from '../db/apiKeys.json';
import getMovie from '../src/components/movieComponent'
import getLocations from '../src/components/movieComponent';
import { searchMovie, filterCards } from './event';

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