const clock = document.getElementById("time");
const dateEl = document.getElementById("date");


function Zero(n) {
  return n < 10 ? "0" + n : n;
}



function updatingClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;
  hours = hours ? hours : 12;

  clock.textContent = `${Zero(hours)}:${Zero(minutes)}:${Zero(
    seconds
  )} ${ampm}`;

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateEl.textContent = now.toLocaleDateString("en-GB", options);
}

updatingClock();
setInterval(updatingClock, 1000);

const themeToggle = document.getElementById("theme-toggle");
const dayVideo = document.getElementById("day-video");
const nightVideo = document.getElementById("night-video");
const statement = document.getElementById("statement");

if (!themeToggle || !dayVideo || !nightVideo) {
  console.error(
    "Missing elements: check IDs for theme-toggle, day-video, night-video"
  );
} 

else {
  dayVideo.classList.add("active");
  nightVideo.classList.remove("active");
  themeToggle.checked = false;

  themeToggle.addEventListener("change", function () {
    const isNight = this.checked;

    document.body.classList.toggle("dark-theme", isNight);

    dayVideo.classList.toggle("active", !isNight);
    nightVideo.classList.toggle("active", isNight);

    statement.textContent = isNight ? "Moon’s up 🌙" : "Sun’s shining ☀️";
  });
}