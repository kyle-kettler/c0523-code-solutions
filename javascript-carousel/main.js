const $carouselTrack = document.querySelector('.carousel-track');
const $slideList = Array.from($carouselTrack.children);
const $prevArrow = document.querySelector('#prev');
const $nextArrow = document.querySelector('#next');
const $pagination = document.querySelector('.pagination');
const $paginationDots = Array.from($pagination.children);

function nextSlide() {
  const $currentSlide = $carouselTrack.querySelector('.current');
  const $nextSlide = $currentSlide.nextElementSibling;
  const $currentDot = $pagination.querySelector('.active');
  const $nextDot = $currentDot.nextElementSibling;
  const currentIndex = $slideList.findIndex(
    ($slideList) => $slideList === $currentSlide
  );

  if (currentIndex === $slideList.length - 1) {
    $currentSlide.classList.remove('current');
    $currentDot.classList.remove('active');
    $slideList[0].classList.add('current');
    $paginationDots[0].classList.add('active');
  } else {
    $currentSlide.classList.remove('current');
    $nextSlide.classList.add('current');
    $currentDot.classList.remove('active');
    $nextDot.classList.add('active');
  }
}

function prevSlide() {
  const $currentSlide = $carouselTrack.querySelector('.current');
  const $previousSlide = $currentSlide.previousElementSibling;
  const $currentDot = $pagination.querySelector('.active');
  const $prevDot = $currentDot.previousElementSibling;
  const currentIndex = $slideList.findIndex(
    ($slideList) => $slideList === $currentSlide
  );

  if (currentIndex === 0) {
    $currentSlide.classList.remove('current');
    $currentDot.classList.remove('active');
    $slideList[$slideList.length - 1].classList.add('current');
    $paginationDots[$paginationDots.length - 1].classList.add('active');
  } else {
    $previousSlide.classList.add('current');
    $currentSlide.classList.remove('current');
    $currentDot.classList.remove('active');
    $prevDot.classList.add('active');
  }
  //   if (counter === 0) {
  //     counter = totalItemsIndex;
  //     $paginationDots[totalItemsIndex].classList.add('active');
  //     $imagesList[totalItemsIndex].classList.remove('hidden');
  //     $paginationDots[0].classList.remove('active');
  //     $imagesList[0].classList.add('hidden');
  //   } else {
  //     $paginationDots[counter].classList.remove('active');
  //     $paginationDots[counter - 1].classList.add('active');
  //     $imagesList[counter].classList.add('hidden');
  //     $imagesList[counter - 1].classList.remove('hidden');
  //     counter--;
  //   }
}

function goToSlideAtIndex(event) {
  const $targetDot = event.target.closest('button');
  if (!$targetDot) return;

  const $currentSlide = $carouselTrack.querySelector('.current');
  const $currentDot = $pagination.querySelector('.active');
  const targetIndex = $paginationDots.findIndex(
    ($paginationDots) => $paginationDots === $targetDot
  );
  const $targetSlide = $slideList[targetIndex];

  $currentSlide.classList.remove('current');
  $currentDot.classList.remove('active');
  $targetDot.classList.add('active');
  $targetSlide.classList.add('current');
}

$pagination.addEventListener('click', goToSlideAtIndex);

$nextArrow.addEventListener('click', nextSlide);

$prevArrow.addEventListener('click', prevSlide);

// $carousel.addEventListener('click', (event) => {
//   console.log(event.target);
//   if (event.target === $nextArrow) {
//     nextSlide();
//     clearInterval(carouselTimer);
//     setInterval(nextSlide, 3000);
//   } else if (event.target === $prevArrow) {
//     prevSlide();
//     clearInterval(carouselTimer);
//     setInterval(nextSlide, 3000);
//   } else if (event.target === $paginationDots) {
//     console.log(event.target);
//   }
// });

// const carouselTimer = setInterval(nextSlide, 3000);
