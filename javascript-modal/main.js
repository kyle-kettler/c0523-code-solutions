const $openButton = document.querySelector('.open-button');
const $closeButton = document.querySelector('.close-button');
const $overlay = document.querySelector('.modal_overlay');

$openButton.addEventListener('click', (event) => {
  $overlay.classList.add('is-active');
});

$closeButton.addEventListener('click', (event) => {
  $overlay.classList.remove('is-active');
});
