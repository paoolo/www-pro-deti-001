//
// Try changing this code while viewing the frontend in the browser to see it live reload.
// See README.md for details on running this code.
//

//source https://stackabuse.com/how-to-build-a-date-countdown-with-vanilla-javascript/

let dayField = document.getElementById('day');
let hourField = document.getElementById('hour');
let minuteField = document.getElementById('minute');
let secondField = document.getElementById('second');

let interval;

const eventDay = new Date(2022, 11, 24).getTime();

// Convert to milisecond
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
  
const countDownFn = () => {
    const today = new Date().getTime();
    const timeSpan = eventDay - today;
    if (timeSpan <= -today) {
        console.log("Unfortunately we have past the event day");
        clearInterval(interval);
        return;
    } else if (timeSpan <= 0) {
        console.log("Today is the event day");
        clearInterval(interval);
        return;
    } else {
        const days = Math.floor(timeSpan / day);
        const hours = Math.floor((timeSpan % day) / hour);
        const minutes = Math.floor((timeSpan % hour) / minute);
        const seconds = Math.floor((timeSpan % minute) / second);
  
        // Set results
        dayField.innerHTML = days;
        hourField.innerHTML = hours;
        minuteField.innerHTML = minutes;
        secondField.innerHTML = seconds;
    }
};
  
interval = setInterval(countDownFn, second);
