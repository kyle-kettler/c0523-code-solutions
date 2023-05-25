const $letterSpans = document.querySelectorAll('span');
const $infoCard = document.querySelector('.info-card');
const $accuracy = document.querySelector('.accuracy');
const $playAgain = document.querySelector('.play-again');

let i = 0;
let totalCount = 0;
let correctCount = 0;

document.addEventListener('keydown', (event) => {
  if (
    $letterSpans[i].innerText === event.key &&
    i !== $letterSpans.length - 1
  ) {
    $letterSpans[i].classList.remove('is-active', 'is-wrong');
    $letterSpans[i].classList.add('is-correct');
    $letterSpans[i + 1].classList.add('is-active');
    i++;
    correctCount++;
  } else if (i === $letterSpans.length - 1) {
    $letterSpans[i].classList.remove('is-active', 'is-wrong');
    $letterSpans[i].classList.add('is-correct');
    $infoCard.classList.add('is-active');
  } else {
    $letterSpans[i].classList.add('is-wrong');
  }
  totalCount++;
  $accuracy.textContent =
    'Accuracy ' + Math.floor((correctCount / totalCount) * 100) + '%';
});

if (i === $letterSpans.length - 1) {
  $infoCard.classList.add('is-active');
}

$playAgain.addEventListener('click', (event) => {
  i = 0;
  totalCount = 0;
  correctCount = 0;
  $letterSpans[0].classList.add('is-active');
  $infoCard.classList.remove('is-active');
  $letterSpans.forEach((span) => {
    span.classList.remove('is-correct');
  });
});
