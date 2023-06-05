const $countdownDisplay = document.querySelector('.countdown-display');
let time = 4;

const countdown = setInterval(() => {
  time--;
  $countdownDisplay.textContent = time;
  if (time === 0) {
    clearInterval(countdown);
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);
