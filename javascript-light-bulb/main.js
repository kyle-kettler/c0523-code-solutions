const $lightBulb = document.querySelector('.light-bulb');
const $container = document.querySelector('.container');

$lightBulb.addEventListener('click', (event) => {
  $container.classList.toggle('dark');
});
