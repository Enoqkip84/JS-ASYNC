//JS - Single threaded, (synchronous language) - execution is one line after another, irregardless of how many LOCs are there.

//Example 1

// console.log("I'm first one");
// console.log("I'm second one");
// console.log("I'm third one");

// example 2

// console.log("I'm first one");

// boilingWater();

// console.log("I'm third one");

// function boilingWater() {
//   console.log('I am second one.....');
//   for (let i = 0; i < 10000000000; i++) {
//     console.log('Still not done!');
//   }
//   console.log('Done!');
//

/*
========================================================================
Example 3 - Making a soup
========================================================================
*/

// chop onion
// chop carrots
// boil water for 10 min
// add carrots, boil for 5 min
// Add onion boil for 5 min

// console.log('chop onion');
// console.log('Chop Carrots');
// boilWater(10000);
// boilWater(5000);
// boilWater(5000);

// function boilWater(time) {
//   console.log('Boiling...');

//   for (let i = 0; i < time; i++) {
//     console.log('Still not done!');
//   }
//   console.log('Done!');
// }

// Rearrangin code, now using asynchronous - More functionality working in background.

// boilWater(10000);
// console.log('chop onion');
// boilWater(5000);
// console.log('Chop Carrots');
// boilWater(5000);

// function boilWater(time) {
//   console.log('Boiling...');
//   for (let i = 0; i < time; i++) {
//     console.log('Still not done!');
//   }
//   console.log('Done!');
// }

/*
========================================================================
Example 3 - Making a soup - Assynchronous
========================================================================
*/

// chop onion
// chop carrots
// boil water for 10 min
// add carrots, boil for 5 min
// Add onion boil for 5 min

//BROWSER!!!! fetch data, Get Geolocation, setTimeout, setTimer e.t.c

//Javascript talks to the browser on the stus of the code once it is not busy asking for the output which was running on the background.
//time set out is the minimum, it could be longer depending with the javacript if busy or not. Incase JS is busy, it will take some time more than the minimum time stipulated.

// boilWater(10000);
// console.log('Chop Carrots');

// function boilWater(time) {
//   console.log('Boiling...');
//   setTimeout(() => {
//     console.log('Done Boiling water!');
//   }, time);
// }

/*
========================================================================
CALLBACK HELL
=========================================================================
-handling how to handle data when it comes back from browser
- using nested functions, and when it becomes to cluttered and unusable, we call this state Callback hell. 
*/

// Make soup
// Boil water 10 min
// Chop carrots
// Add carrots boil for 5 min
// chop onion
// add onion, boil for 5 minutes

// boilWater();
// console.log('Chop carrots');

// function boilWater() {
//   console.log('Boiling..');
//   setTimeout(() => {
//     console.log('Done');
//     console.log('add carrots');
//     setTimeout(() => {
//       console.log('Carrots done ');
//       console.log('add onions');

//       setTimeout(() => {
//         console.log('Onions done');
//       }, 5000);
//     }, 5000);
//     console.log('chop onions');
//   }, 1000);
// }

/*
========================================================================
CALLBACK, PPROMISES, ASYNC/AWAIT 
=========================================================================
*/
// const heading1 = document.querySelector('.one');
// const heading2 = document.querySelector('.two');
// const heading3 = document.querySelector('.three');
// const button = document.querySelector('.btn');

// button.addEventListener('click', () => {
//   setTimeout(() => {
//     heading1.style.color = 'red';
//     setTimeout(() => {
//       heading2.style.color = 'green';
//       setTimeout(() => {
//         heading3.style.color = 'blue';
//       }, 1000);
//     }, 3000);
//   }, 1000);
// });

/*
========================================================================PROMISES
========================================================================
-Pending, Resolved, Rejected
-Then catch - Pass another callback
*/
const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {});

const promise = new Promise((Resolve, Reject) => {
  let value = false;
  if (value) {
    Resolve('Hey the value is resolved');
  } else {
    Reject(`There was error, value is false`);
  }
});

promise
  .then((taco) => {
    console.log(taco);
  })
  .catch((err) => {
    console.log(err);
  });
