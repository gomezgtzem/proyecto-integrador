const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
//para colores
const backLogin = document.querySelector(".header-login");
const backSign = document.querySelector(".header-sign");
const $ColorOp1 = document.querySelector("#option1");
const $ColorOp2 = document.querySelector("#option2");
const $ColorOp3 = document.querySelector("#option3");
const $ColorOp4 = document.querySelector("#option4");
let historyPointer =0; //0 - log in / sign up - 1

//paleta de colores
const style1 = 'rgba(37, 105, 184, 1)';//estilo 1, color principal y letras de footer
const cStyle1 = 'rgba(0, 43, 92, 1)'; //color de footer y color principal de letras :v-
const style2 = 'rgba(115, 149, 73, 1)';//estilo 2, color principal y letras de footer
const cStyle2 = 'rgba(37, 37, 36, 1)';//color de footer y principal de las letras
const style3 = 'rgba(228, 77, 65, 1)';//estilo 3, color pincipal y de letras de footer
const cStyle34 = 'rgba(16, 71, 110, 1)';//color de footer y principal de letras de estilo 3 y 4
const style4 = 'rgba(254, 196, 81, 1)';// estilo 4, color principal y de letras de footer
//cambio de color de encabezados cada vez que se seleccione un nuevo color
$ColorOp1.onclick = (() => {
   if(historyPointer==0){
      backLogin.style.color = style1;
      backSign.style.color = cStyle1;
   }else{
      backLogin.style.color = cStyle1;
      backSign.style.color = style1;
   }
});
$ColorOp2.onclick = (() => {
   if(historyPointer==0){
      backLogin.style.color = style2;
      backSign.style.color = cStyle2;
   }else{
      backLogin.style.color = cStyle2;
      backSign.style.color = style2;
   }
});
$ColorOp3.onclick = (() => {
   if(historyPointer==0){
      backLogin.style.color = style3;
      backSign.style.color = cStyle34;
   }else{
      backLogin.style.color = cStyle34;
      backSign.style.color = style3;
   }
});
$ColorOp4.onclick = (() => {
   if(historyPointer==0){
      backLogin.style.color = style4;
      backSign.style.color = cStyle34;
   }else{
      backLogin.style.color = cStyle34;
      backSign.style.color = style4;
   }
});
//formato y color de encabezados cada que se intercambien de pestañas
loginBtn.onclick = (() => { //iniciar sesion
   loginForm.style.marginLeft = "0%";
   historyPointer =0; //0 - log in / sign up - 1

   if (document.getElementById('option1').checked) {
      backLogin.style.color = style1;  //poner color de letra en css
      backSign.style.color = cStyle1;
   }
   if (document.getElementById('option2').checked) {
      backLogin.style.color = style2; //poner color de letra en css
      backSign.style.color = cStyle2;
   }
   if (document.getElementById('option3').checked) {
      backLogin.style.color = style3; //poner color de letra en css
      backSign.style.color = cStyle34;
   }
   if (document.getElementById('option4').checked) {
      backLogin.style.color = style4; //poner color de letra en css
      backSign.style.color = cStyle34;
   }
});
signupBtn.onclick = (() => {
   historyPointer =1; //0 - log in / sign up - 1
   loginForm.style.marginLeft = "-50%";

   if (document.getElementById('option1').checked) {
      backLogin.style.color = cStyle1; //poner color de letra en css
      backSign.style.color = style1;
   }
   if (document.getElementById('option2').checked) {
      backLogin.style.color = cStyle2; //poner color de letra en css
      backSign.style.color = style2;
   }
   if (document.getElementById('option3').checked) {
      backLogin.style.color = cStyle34; //poner color de letra en css
      backSign.style.color = style3;
   }
   if (document.getElementById('option4').checked) {
      backLogin.style.color = cStyle34; //poner color de letra en css
      backSign.style.color = style4;
   }
});

signupLink.onclick = (() => {
   signupBtn.click();
   return false;
});