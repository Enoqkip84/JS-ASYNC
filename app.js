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
