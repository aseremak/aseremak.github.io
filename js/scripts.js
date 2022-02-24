const carousel = document.querySelector('.carousel');
const cellCount = 5;
let selectedIndex = 0;

function rotateCarousel() {
  const angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(calc(var(--distance)*(-1))) rotateY(' + angle + 'deg)';
}

const prevButton = document.querySelector('.spin-left-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});

const nextButton = document.querySelector('.spin-right-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
  nextButton.classList.remove('click-me');
  prevButton.classList.remove('button-disabled');
  prevButton.classList.add('button-enabled');

});

