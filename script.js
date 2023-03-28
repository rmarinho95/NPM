// Select the box element
var box = document.getElementById('box');

// Create an animation using Anime.js
var animation = anime({
  targets: box,
  translateX: 250,
  duration: 1000000,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
});
