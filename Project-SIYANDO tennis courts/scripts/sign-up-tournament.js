'use strict';


const signUpTournament = document.getElementById("sign-up-tournament-form");
const errorElement = document.getElementById("errors");

const emailElement = document.querySelector("[name=email]");
const ageElement = document.querySelector("[name=age]");
const nameElement = document.querySelector("[name=personalName]");

debugger;

const validateEmail = (email) => {
  const notEmpty = Boolean(email.length);
  const hasEmailSign = email.includes("@");
  const hasDotSign = email.includes(".");
  const hasMinWidth = email.length > 4;

  if (notEmpty && hasEmailSign && hasDotSign && hasMinWidth) {
    return true;
  } else {
    errorElement.innerText = "Моля въведете коректен имейл адрес.";
    emailElement.style.borderBottom = "2px solid red";
  }
  }
  

  const validateAge = (age) => {
    if (!age) {
      errorElement.innerText = "Моля въведете години.";
      ageElement.style.borderBottom = "2px solid red";
    }
    else{
        return true;
    }
  }

  
const validateName = (name) => {
    if (!name) {
        errorElement.innerText = "Моля въведете име.";
        nameElement.style.borderBottom = "2px solid red";  
    } 
    else{
        return true;
    }
  }

  if(signUpTournament){
    signUpTournament.addEventListener("submit", event => {
        event.preventDefault();
    
        const emailValue = emailElement.value;
        const ageValue = ageElement.value;
        const nameValue = nameElement.value;
        
        let isEmailCorrect = validateEmail(emailValue);
        let isAgeCorrect = validateAge(ageValue);
        let isNameCorrect = validateName(nameValue);
        
        if (isEmailCorrect && isAgeCorrect && isNameCorrect) {
          alert(`Подадохте заявка за участие`);
          
          emailElement.value = "";
          ageElement.value = "";
          nameElement.value = "";
        }
        
      });
  }