"use strict";

const time = document.getElementById("time");
const timeZone = document.getElementById("timeZone");
const countries = document.getElementById("country");
const button = document.getElementById("button");
const pseudoTime = document.getElementById("faketime");

function checkOverLap(getHour) {
    let count = -1;
    const military_time = 23;

    if (getHour <= military_time)
        return getHour;

    while (getHour > military_time) {
        count++;
        getHour--;
    }
    return count;
}

let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();

time.value = `${hour}:${minutes} `;
pseudoTime.value = time.value;

// time.addEventListener("change", () => {
//     let inputValue = time.value;
//     pseudoTime.value = inputValue;
// });

// timeZone.addEventListener("change", () => {
//     let inputValue = time.value;
//     pseudoTime.value = inputValue;
// });

const updatePseudoTime = () => {
    let inputValue = time.value;
    pseudoTime.value = inputValue;
};

time.addEventListener("change", updatePseudoTime);
timeZone.addEventListener("change", updatePseudoTime);

button.addEventListener("click", () => {
    let inputValue = time.value;
    let getHour = Number(inputValue.split(":")[0]);
    let getMinutes = Number(inputValue.split(":")[1]);

    let enterTime = document.querySelector(".enter-time");

    if (isNaN(getHour) || isNaN(getMinutes)) {
        enterTime.textContent = "Please enter a valid time";
        enterTime.style.color = "red";
        return;
    }

    enterTime.style.color = "#fff"
    enterTime.textContent = "Enter the time";

    const selectTimeZoneOption = timeZone.options[timeZone.selectedIndex];
    const timezoneTextContent = selectTimeZoneOption.textContent;
    const selectCountryOption = countries.options[countries.selectedIndex];
    const countryTextContent = selectCountryOption.textContent;

    let result = document.querySelector("h4");

    if (parseInt(timeZone.value) > parseInt(countries.value)) {
        getHour = +getHour - (+timeZone.value) + +countries.value;
    } else if (parseInt(timeZone.value) < parseInt(countries.value)) {
        getHour = +getHour + (+countries.value) - +timeZone.value;
    }

    if (getHour < 10) {
        getHour = `0${getHour} `;
    }
    if (getMinutes < 10) {
        getMinutes = `0${getMinutes} `;
    }

    result.textContent = `${inputValue} ${timezoneTextContent}, when converted to the time in ${countryTextContent} is: ${checkOverLap(getHour)}:${getMinutes} `;
});
