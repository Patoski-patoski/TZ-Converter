"use strict";

const time = document.getElementById("time");
const timeZone = document.getElementById("timeZone");
const countries = document.getElementById("country");
const button = document.getElementById("button");
const pseudoTime = document.getElementById("faketime");

//get the default current date (UTC standard)

let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
          
time.value = `${hour}:${minutes}`;
pseudoTime.value = time.value;    

time.addEventListener("change", () => 
{
    let inputValue = time.value;
    pseudoTime.value = inputValue; 
}); 

timeZone.addEventListener("change", () => 
{
    let inputValue = time.value;
    pseudoTime.value = inputValue; 
}); 

button.addEventListener("click", () =>
{
    let inputValue = time.value;
    let getHour = Number(inputValue.split(":")[0]); //split the time into hour, where the splitting point is the double colon ":", [0] is the left side
    let getMinutes = Number(inputValue.split(":")[1]); //split the time into minute, [1] is the right side of the double colon ":";

    let enterTime = document.querySelector(".enter-time");


    if (getHour == "" || getMinutes == "") {
    //    let enterTime = document.querySelector(".enter-time");
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


    if (timeZone.value > countries.value)
   {
        getHour = +getHour - (+timeZone.value) + +countries.value;
        if (getHour.toString().length == 1) 
        {
            getHour = `0${getHour}`;
        }
        if (getMinutes.toString().length == 1)
        {
            getMinutes = `0${getMinutes}`;
        }
        result.textContent = `${inputValue} ${timezoneTextContent}, when converted to the time in ${countryTextContent} is: ${getHour}:${getMinutes}`;
   }

   else if(timeZone.value < countries.value)
   {
        if (getHour.toString().length == 1)
        {
            getHour = `0${getHour}`; 
        }

        if (getMinutes.toString().length == 1)
        {
            getMinutes = `0${getMinutes}`;
        }
        getHour = +getHour + (+countries.value) - +timeZone.value;
        result.textContent = `${inputValue} ${timezoneTextContent}, when converted to the time in ${countryTextContent} is: ${getHour}:${getMinutes}`;
   }
   else
        if (getHour.toString().length == 1)
        {
            getHour = `0${getHour}`;
        }
        if (getMinutes.toString().length == 1)
        {
            getMinutes = `0${getMinutes}`;
        }
        result.textContent = `${inputValue} ${timezoneTextContent}, when converted to the time in ${countryTextContent} is: ${getHour}:${getMinutes}`;
});