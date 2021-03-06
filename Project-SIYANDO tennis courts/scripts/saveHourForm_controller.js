'use strict';

function checkData(){
const saveHourForm = document.getElementById("save-hour-form");
const errorElement = document.getElementById("errors");

const courtElement = document.querySelector("[name=courts]");
const hourElement = document.querySelector("[name=hour]");
const dayElement = document.querySelector("[name=day]");
const nameElement = document.querySelector("[name=personalName]");

const validateCourt = (court) => {
    if (court > 0 && court < 5) {
      return true;
    } else {
      errorElement.innerText = "Моля въведете номер на корт между 1 и 4.";
      courtElement.style.borderBottom = "2px solid red";
    }
  }
  
  const validateHour = (hour) => {
    if (hour > 0 && hour < 25) {
      return true;
    } else {
      errorElement.innerText = "Моля въведете валиден час.";
      hourElement.style.borderBottom = "2px solid red";
    }
  }
  
  const validateDay = (day) => {
    if (day > 0 && day < 8) {
      return true;
    } else {
      errorElement.innerText = "Моля въведете валиден ден.";
      dayElement.style.borderBottom = "2px solid red";
    }
  }

  if(saveHourForm){
        const courtValue = courtElement.value;
        const hourValue = hourElement.value;
        const dayValue = dayElement.value;

        let isCourtCorrect = validateCourt(courtValue);
        let isHourCorrect = validateHour(hourValue);
        let isDayCorrect = validateDay(dayValue);
      
        if (isCourtCorrect && isHourCorrect && isDayCorrect) {
          alert(`Записан е час успешно`);
   
            fetch("data.json").then((blob) => {
              return blob.json();
            })
            .then((result) => {
           
              if(result.days[dayElement.value].willRain == "true"){
                alert(`В запазения от вас ден има опасност от валежи`);
                }
            })
            .catch((err) => {
              console.log(err);
            });
          
        }   
    
  }
}

