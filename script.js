const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

const birthday = "1 Jan 2024";

const countdown = () => {
  const currentDate = new Date(); // today's date
  const birthdayDate = new Date(birthday);

  const secondsLeft = Math.floor((birthdayDate - currentDate) / 1000);

  const days = Math.floor(secondsLeft / 3600 / 24);
  const hours = Math.floor(secondsLeft / 3600) % 24;
  const minutes = Math.floor(secondsLeft / 60) % 60;
  const seconds = Math.floor(secondsLeft) % 60;

  daysEl.textContent = timeFormator(days);
  hoursEl.textContent = timeFormator(hours);
  minutesEl.textContent = timeFormator(minutes);
  secondsEl.textContent = timeFormator(seconds);
};

const timeFormator = (time) => {
  // if (time < 10) {
  //   return `0${time}`;
  // } else {
  //   return time;
  // }
  return time < 10 ? `0${time}` : time;
};

countdown();
setInterval(countdown, 1000);
