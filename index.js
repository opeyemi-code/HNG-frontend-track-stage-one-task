let dayOfTheWeek = document.getElementById("day-of-the-week");
let hourOfTheDay = document.getElementById("hour");
let minuteOfTheDay = document.getElementById("minute");
let periodOfTheDay = document.getElementById("meridian");

const date = new Date();

function setDayOfTheWeek() {
  let day;

  switch (date.getDay()) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednessday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
      day = "Sunday";
      break;
  }

  dayOfTheWeek.textContent = day;
}

setDayOfTheWeek();

function setHourOfTheWeek() {
  if (date.getUTCHours() < 12) {
    hourOfTheDay.textContent = "0" + date.getUTCHours();
  } else {
    hourOfTheDay.textContent = date.getUTCHours();
  }
}

setHourOfTheWeek();

function setMinuteOfTheDay() {
  if (date.getMinutes() < 10) {
    minuteOfTheDay.textContent = "0" + date.getUTCMinutes();
  } else {
    minuteOfTheDay.textContent = date.getUTCMinutes();
  }
}

setMinuteOfTheDay();

function setPeriodOfTheDay() {
  if (hourOfTheDay.textContent < 12) {
    periodOfTheDay.textContent = " am";
  } else {
    periodOfTheDay.textContent = " pm";
  }
}

setPeriodOfTheDay();
