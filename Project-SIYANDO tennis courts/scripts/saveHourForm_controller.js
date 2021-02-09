const saveHourForm = document.getElementById("save-hour-form");
const errorElement = document.getElementById("errors");

const courtElement = document.querySelector("[name=courts]");
const hourElement = document.querySelector("[name=hour]");
const dayElement = document.querySelector("[name=day]");


/*<label for="court-number"><b>Корт №</b></label>
               <input type="number" min="0" name="courts" placeholder="Въведете номера на корта">
               <label for="month"><b>Месец</b></label>
               <input type="number" min="0" name="month" placeholder="Въведете номера на месец">
               <label for="day"><b>Дата</b></label>
               <input type="number" min="0" name="day" placeholder="Въведете ден от месеца">
               <label for="hour"><b>Час</b></label>
               <input type="number" min="0" name="hour" placeholder="Въведете кръгъл час">
               <label for="telephone-number"><b>Телефонен номер</b></label>
               <input type="text" name="tel-number" placeholder="Въведете телефонен номер">*/

debugger;

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
      courtElement.style.borderBottom = "2px solid red";
    }
  }
  
  const validateDay = (day) => {
    if (day > 0 && day < 8) {
      return true;
    } else {
      errorElement.innerText = "Моля въведете валидна ден.";
      courtElement.style.borderBottom = "2px solid red";
    }
  }

  if(saveHourForm){
    saveHourForm.addEventListener("submit", event => {
        event.preventDefault();
    
        const courtValue = courtElement.value;
        const hourValue = hourElement.value;
        const dayValue = dayElement.value;

        let isCourtCorrect = validateCourt(courtValue);
        let isHourCorrect = validateHour(hourValue);
        let isDayCorrect = validateDay(dayValue);
      
        if (isCourtCorrect && isHourCorrect && isDayCorrect) {
          alert(`Записан е час успешно`);
          
          courtElement.value = "";
          hourElement.value = "";
          dayElement.value = "";
        }
        
      });
  }