import Hikes from './hikes.js';

//class instance or object
const myHikes = new Hikes("hikeList");

  window.addEventListener("load", () => {
    myHikes.showHikeList();
  });
myHikes.hikeList;