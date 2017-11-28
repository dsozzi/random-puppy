
'use strict';
const breeds = ['boxer', 'african', 'collie'];
const dogPic = "https://dog.ceo/api/img/hound-walker/n02089867_1599.jpg";

export function getDogByBreed() {
  return new Promise((resolve, reject) => {
    resolve(dogPic)
  });
}

export function getBreeds() {
  return new Promise((resolve, reject) => {
    resolve(breeds)
  });
}