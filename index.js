"use strict";

const time = document.getElementById("time");
const timeZone = document.getElementById("timeZone");
const countries = document.getElementById("country");
const button = document.getElementById("button");
const pseudoTime = document.getElementById("faketime");

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
    let getHour = Number(inputValue.split(":")[0]);
    let getMinutes = Number(inputValue.split(":")[1]);
    const selectTimeZoneOption = timeZone.options[timeZone.selectedIndex];
    const timezoneTextContent = selectTimeZoneOption.textContent;
    const selectCountryOption = countries.options[countries.selectedIndex];
    const countryTextContent = selectCountryOption.textContent;
    let result = document.querySelector("h4"); 

   if (timeZone.value > countries.value)
   {
        getHour -=  timeZone.value +  countries.value;
        result.textContent = `${inputValue} ${timezoneTextContent}, when converted to the time in ${countryTextContent} is: ${getHour}:${getMinutes}`;
   }

   else if(timeZone.value < countries.value)
   {
        getHour += (countries.value - timeZone.value);
        result.textContent = `${inputValue} ${timezoneTextContent}, when converted to the time in ${countryTextContent} is: ${getHour}:${getMinutes}`;
   }
   else
        result.textContent = `${inputValue} ${timezoneTextContent}, when converted to the time in ${countryTextContent} is: ${getHour}:${getMinutes}`;
}); 