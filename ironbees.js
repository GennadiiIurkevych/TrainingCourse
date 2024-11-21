// let prev = document.querySelector('.prev');
// let next = document.querySelector('.next');

// next.addEventListener('click', function() {
//   let wellcoms = document.querySelectorAll('.wellcom');
//   document.querySelector('.box').appendChild(wellcoms[0]);
// })

// prev.addEventListener('click', function() {
//   let wellcoms = document.querySelectorAll('.wellcom');
//   document.querySelector('.box').prepend(wellcoms[wellcoms.length -1]);
// })

// let prev_2 = document.querySelector('.prev_2');
// let next_2 = document.querySelector('.next_2');

// next_2.addEventListener('click', function() {
//   let wellcoms_R = document.querySelectorAll('.wellcom_R');
//   document.querySelector('.box_2').appendChild(wellcoms_R[0]);
// })

// prev_2.addEventListener('click', function() {
//   let wellcoms_R = document.querySelectorAll('.wellcom_R');
//   document.querySelector('.box_2').prepend(wellcoms_R[wellcoms_R.length -1]);
// })

let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listItemDom = document.querySelector('.carousel .list');
let thrumbnailDom = document.querySelector('.carousel .thrumbnail');
nextDom.onclick = function() {
  showSlider('next');
}

prevDom.onclick = function() {
  showSlider('prev');
}

let timeRunning = 2000;
// let timeAutoNext = 7000;
let runTimeOut;
// let runAutoRun = setTimeout(() => {
//   nextDom.click();
// }, timeAutoNext);

function showSlider(type) {
  let itemSlider = document.querySelectorAll('.carousel .list .item');
  let itemThrumbnail = document.querySelectorAll('.carousel .thrumbnail .item');

  if(type === 'next') {
    listItemDom.appendChild(itemSlider[0]);
    thrumbnailDom.appendChild(itemThrumbnail[0]);
    carouselDom.classList.add('next');
  } else {
    let positionLastItem = itemSlider.length -1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thrumbnailDom.prepend(itemThrumbnail[positionLastItem]);
    carouselDom.classList.add('prev');
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, timeRunning)

  // clearTimeout(runAutoRun);
  // runAutoRun = setTimeout(() => {
  //   nextDom.click();
  // }, timeAutoNext)
}

// import {func} from 'login.js';

// func();














