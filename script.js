const clock = document.getElementById("clock");
const cal = document.getElementById("date");
const today = document.getElementById("today");
const now = new Date();

let day = now.getDay()
let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();
if (month < 10) month = "0" + month;
if (date < 10) date = "0" + date;

switch (day) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

cal.innerText = `${date} / ${month} / ${year}`;
today.innerText = day

const run = () => {
  const now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let meri = "AM"

  if (hour > 12) {
    hour -= 12;
    meri = "PM";
  };
  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;

  clock.innerText = `${hour} : ${minute} : ${second} ${meri}`;
};

setInterval(run, 900);