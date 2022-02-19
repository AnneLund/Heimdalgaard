//BURGERMENU

//Min burgermenu skal åbne/lukke + skifte baggrundsfarve(toggle) når jeg klikker på den (addeventlistener)
let burgerMenu = document.getElementById("burger-menu");
let overlay = document.getElementById("menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

 //FORMULAR
 
 //Jeg deklarerer en konstant og tildeler den en key "button".
 const button = document.getElementById("send");
 
 //Når jeg klikker på knappen "send", vil jeg have en funktion som har flere conditions.
 button.onclick = function () {
 
 //Hvis inputtet "Fulde navn" er tomt, skal brugeren informeres om dette med en alert. Feltet skal markeres, så brugeren ved, hvor informationen mangler (name.focus)
 
   const name = document.getElementById("name");
   if (name.value === "") {
     alert("Udfyld feltet fulde navn!");
     name.focus();
     return false;
   }

 
 
 //Email-validering: Hvis inputtet "email" ikke er udfyldt, skal brugeren have en alert,
   const email = document.getElementById("email");
   if (!email.value) {
     alert("Udfyld emailadresse!");
     email.focus();
     return false;
   } else {
 
 //Hvis brugerens indtastning af email ikke lever op til det pattern der er beskrevet i den tilhørende funktion, skal brugeren have en alert.
     if (!isValidEmail(email.value)) {
       alert("Indtast korrekt emailadresse");
       email.focus();
       return false;
     }
   }

     checkNumber();
 
 
 //Hvis brugeren ikke har angivet sit nummer, skal denne have en alert.
   function checkNumber() {
     const number = document.getElementById("number");
   }

   const message = document.getElementById("message");
   if(message.value === "") {
     alert("Skriv din besked i tekstfeltet");
     message.focus();
     return false;
   }
 
 //Funktion der checker, at brugeren har indtastet et 8-cifret nummer.
   function isValidNumber(value) {
     let pattern = /^\d{8}$/;
     return pattern.test(value);
   }
 
 //Funktion der checker at emailen indeholder de nødvendige tegn.
   function isValidEmail(value) {
     let pattern =
       /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
     return pattern.test(value);
   }
 
 //Brugeren får også en alert, der fortæller at formularen er afsendt, hvis der ikke er krydset af i checkboxen.
   alert("Formularen blev sendt!");
 };
 