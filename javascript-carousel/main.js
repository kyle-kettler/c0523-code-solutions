const $imagesList = document.querySelectorAll('.carousel-img');
const $paginationDots = document.querySelectorAll('.pagination-dot');
// const $pagination = document.querySelector('.pagination');
const $carousel = document.querySelector('.carousel-wrap');
const $prevArrow = document.querySelector('#prev');
const $nextArrow = document.querySelector('#next');

let counter = 0;

function nextSlide() {
  if (counter === $imagesList.length - 1) {
    counter = 0;
    $paginationDots[0].classList.add('active');
    $imagesList[0].classList.remove('hidden');
    $paginationDots[$imagesList.length - 1].classList.remove('active');
    $imagesList[$imagesList.length - 1].classList.add('hidden');
  } else {
    $paginationDots[counter].classList.remove('active');
    $paginationDots[counter + 1].classList.add('active');
    $imagesList[counter].classList.add('hidden');
    $imagesList[counter + 1].classList.remove('hidden');
    counter++;
  }
}

function prevSlide() {
  $paginationDots[counter].classList.remove('active');
  $paginationDots[counter - 1].classList.add('active');
  $imagesList[counter].classList.add('hidden');
  $imagesList[counter - 1].classList.remove('hidden');
  counter--;
}

$carousel.addEventListener('click', (event) => {
  if (event.target === $nextArrow) {
    nextSlide();
  } else if (event.target === $prevArrow && counter > 0) {
    prevSlide();
  } else if (event.target === $paginationDots) {
    console.log($paginationDots.indexOf());
  }
});
