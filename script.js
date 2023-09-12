// create date
const now = new Date();
console.log(now);

const day = now.getDay();
console.log(day);
if (day === 1) {
  document.querySelector(".currentDayOfTheWeek").textContent = " Monday";
} else if (day === 2) {
  document.querySelector(".currentDayOfTheWeek").textContent = "Tuesday";
} else if (day === 3) {
  document.querySelector(".currentDayOfTheWeek").textContent = "Wednesday";
} else if (day === 4) {
  document.querySelector(".currentDayOfTheWeek").textContent = "Thursday";
} else if (day === 5) {
  document.querySelector(".currentDayOfTheWeek").textContent = "Friday";
} else if (day === 6) {
  document.querySelector(".currentDayOfTheWeek").textContent = "Saturday";
} else if (day === 7) {
  document.querySelector(".currentDayOfTheWeek").textContent = "Sunday";
}

document.querySelector(
  ".currentUTCTime"
).textContent = `${now.getUTCHours()}:${now.getUTCMinutes()}`;
