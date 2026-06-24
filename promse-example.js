const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {});

const promise = new Promise((Resolve, Reject) => {
  let value = true;
  if (value) {
    Resolve([1, 2, 4]);
  } else {
    Reject(`there was an error, value is false`);
  }
});

promise
  .then((taco) => {
    console.log(taco);
  })
  .catch((err) => {
    console.log(err);
  });
