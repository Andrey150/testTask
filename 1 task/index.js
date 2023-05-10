const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  let interval;
  return (time) => {

    clearInterval(interval);

    interval = setInterval(() => {
      time--;

      let hours = Math.floor(time / 60 / 60) % 24;
      let minutes = Math.floor(time / 60) % 60;
      let seconds = Math.floor(time % 60)

      if (hours < 10) {
        hours = `0${hours}`
      }
      if (minutes < 10) {
        minutes = `0${minutes}`
      }
      if (seconds < 10) {
        seconds = `0${seconds}`
      }

      if (time < 0) {
        clearInterval(interval);
        timerEl.textContent = 'Time is over'
      } else {
        timerEl.textContent = `${hours}:${minutes}:${seconds}`;
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  const value = inputEl.value.split('');
  let arr = [];
  for (let i = 0; i < value.length; i++) {
      arr.push(value[i])
  }
  return inputEl.value = arr.toString().replace(/[\D]+/g, '')
});

buttonEl.addEventListener('click', () => {
  const time = Number(inputEl.value);

  animateTimer(time);

  inputEl.value = '';
});
