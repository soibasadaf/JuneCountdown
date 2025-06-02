const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const targetDate = new Date("June 30, 2025 23:59:59");

function timer() {
    const currentDate = new Date();
    const distance = targetDate - currentDate;

    const dayscount = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hourscount = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutescount = Math.floor(distance / 1000 / 60) % 60;
    const secondscount = Math.floor(distance / 1000) % 60;

    console.log(days + ":" + hours + ":" + minutes + ":" + seconds);

    days.innerHTML = dayscount;
    hours.innerHTML = hourscount;
    minutes.innerHTML = minutescount;
    seconds.innerHTML = secondscount;

    if (distance < 0) {
        clearInterval(timerInterval);
    }
}

const timerInterval = setInterval(timer, 1000);

