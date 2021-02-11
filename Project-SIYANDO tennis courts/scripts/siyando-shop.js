'use strict';
      
window.onload = function(){
var confirmForm = document.getElementById("confirm");

var btn1 = document.getElementsByClassName("buy-product")[0];

var btn2 = document.getElementsByClassName("buy-product")[1];

var btn3 = document.getElementsByClassName("buy-product")[2];

var closeIcon = document.getElementsByClassName("close")[0];

var cancelBtn = document.getElementsByClassName("cancel-btn")[0];

var confirmBtn = document.getElementsByClassName("confirm-btn")[0];

btn1.onclick = function() {
    debugger;
    confirmForm.style.display = "block";

    let product = document.getElementsByClassName("product")[0];
    let clonedProduct = product.cloneNode(true);
    document.getElementsByClassName("product-to-confirm")[0].appendChild(clonedProduct);
}

btn2.onclick = function() {
    debugger;
    confirmForm.style.display = "block";

    let product = document.getElementsByClassName("product")[1];
    let clonedProduct = product.cloneNode(true);
    document.getElementsByClassName("product-to-confirm")[0].appendChild(clonedProduct);
}

btn3.onclick = function() {
    debugger;
    confirmForm.style.display = "block";

    let product = document.getElementsByClassName("product")[2];
    let clonedProduct = product.cloneNode(true);
    document.getElementsByClassName("product-to-confirm")[0].appendChild(clonedProduct);
}

// When the user clicks on <span> (x), close 
closeIcon.onclick = function() {
    confirmForm.style.display = "none";
    document.getElementsByClassName("product-to-confirm")[0].removeChild(document.querySelector(".confirm-content .product"));
    emailElement.value = "";
}

cancelBtn.onclick = function() {
    confirmForm.style.display = "none";
    document.getElementsByClassName("product-to-confirm")[0].removeChild(document.querySelector(".confirm-content .product"));
    emailElement.value = "";
}

const validateEmail = (email) => {
    const notEmpty = Boolean(email.length);
    const hasEmailSign = email.includes("@");
    const hasDotSign = email.includes(".");
    const hasMinWidth = email.length > 4;
  
    if (notEmpty && hasEmailSign && hasDotSign && hasMinWidth) {
      return true;
    } else {
      emailElement.style.borderBottom = "2px solid red";
    }
}

const emailElement = document.querySelector("[name=email]");

confirmBtn.onclick = function() {    
        const emailValue = emailElement.value;
        let isEmailCorrect = validateEmail(emailValue);
        
        if (isEmailCorrect) {
            alert(`Направихте успешна поръчка.`);
            confirmForm.style.display = "none";
            document.getElementsByClassName("product-to-confirm")[0].removeChild(document.querySelector(".confirm-content .product"));
            emailElement.value = "";
        }
}

// When the user clicks anywhere outside, close it
window.onclick = function(event) {
    if (event.target == confirmForm) {
        confirmForm.style.display = "none";
        document.getElementsByClassName("product-to-confirm")[0].removeChild(document.querySelector(".confirm-content .product"));
        emailElement.value = "";
    }
 }
}