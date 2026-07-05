/*
========================================================================
CALLBACK, PPROMISES, ASYNC/AWAIT 
=========================================================================
*/

const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');
const btn = document.querySelector('.btn');
const container = document.querySelector('.img-container');
const url = 'https://images.unsplash.com/photo-1493558103817-58b2924bce98';

btn.addEventListener('click', () => {
  console.log(loadImage(url));

  loadImage(url).then((data)=> console.log(data))
});
function loadImage(url){
 
  return new Promise ((resolve, reject)=>{
    let img = new Image();
    img.addEventListener('load', () => {
      resolve(img);
    });
    img.addEventListener('error', () => {
      reject(new Error('Failed to load image'));
    });
    img.src = url;
  });
}
function loadImage(url){
  return new Promise ((resolve, reject)=>{
    let img = new Image();
    img.addEventListener('load', )
  })
}