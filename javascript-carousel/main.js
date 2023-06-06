const $imagesList = document.querySelectorAll('.carousel-img');
const $paginationDots = document.querySelectorAll('.pagination-dot');
// const $pagination = document.querySelector('.pagination');
const $carousel = document.querySelector('.carousel-wrap');
const $prevArrow = document.querySelector('#prev');
const $nextArrow = document.querySelector('#next');

const totalItemsIndex = $imagesList.length - 1;

let counter = 0;

function nextSlide() {
  if (counter === totalItemsIndex) {
    counter = 0;
    $paginationDots[0].classList.add('active');
    $imagesList[0].classList.remove('hidden');
    $paginationDots[totalItemsIndex].classList.remove('active');
    $imagesList[totalItemsIndex].classList.add('hidden');
  } else {
    $paginationDots[counter].classList.remove('active');
    $paginationDots[counter + 1].classList.add('active');
    $imagesList[counter].classList.add('hidden');
    $imagesList[counter + 1].classList.remove('hidden');
    counter++;
  }
}

function prevSlide() {
  if (counter === 0) {
    counter = totalItemsIndex;
    $paginationDots[totalItemsIndex].classList.add('active');
    $imagesList[totalItemsIndex].classList.remove('hidden');
    $paginationDots[0].classList.remove('active');
    $imagesList[0].classList.add('hidden');
  } else {
    $paginationDots[counter].classList.remove('active');
    $paginationDots[counter - 1].classList.add('active');
    $imagesList[counter].classList.add('hidden');
    $imagesList[counter - 1].classList.remove('hidden');
    counter--;
  }
}

$carousel.addEventListener('click', (event) => {
  if (event.target === $nextArrow) {
    nextSlide();
    clearInterval(carouselTimer);
    setInterval(nextSlide, 3000);
  } else if (event.target === $prevArrow) {
    prevSlide();
    clearInterval(carouselTimer);
    setInterval(nextSlide, 3000);
  } else if (event.target === $paginationDots) {
    console.log($paginationDots.indexOf());
  }
});

const carouselTimer = setInterval(nextSlide, 3000);
