//selector de colores
const $styleOption = document.querySelector('#colorSelect');
//lo comentado es para el footer
const $cartImage = document.querySelector('#cart-image');//imagenes a cambiar
const $logo = document.querySelector('#logo');
const $facebook = document.querySelector('#facebook');
const $instagram = document.querySelector('#instagram');
const $twitter = document.querySelector('#twitter');
const $youtube = document.querySelector('#youtube'); 

//background color y font color 
const mainStyle1 = 'rgba(37, 105, 184, 1)';//estilo 1, color principal y letras de footer
const compStyle1 = 'rgba(0, 43, 92, 1)'; //color de footer y color principal de letras :v-
const mainStyle2 = 'rgba(115, 149, 73, 1)';//estilo 2, color principal y letras de footer
const compStyle2 = 'rgba(37, 37, 36, 1)';//color de footer y principal de las letras
const mainStyle3 = 'rgba(228, 77, 65, 1)';//estilo 3, color pincipal y de letras de footer
const compStyle34 = 'rgba(16, 71, 110, 1)';//color de footer y principal de letras de estilo 3 y 4
const mainStyle4 = 'rgba(254, 196, 81, 1)';// estilo 4, color principal y de letras de footer

//localiza todos los elementos con esas etiquetas, se modificara atributo, no etiqueta
const mainBackColor = document.getElementsByClassName('style1'); //color background
const compBackColor = document.getElementsByClassName('style1-comp'); //color footer
const borderColor = document.getElementsByClassName('bordS'); //elementos que necesitan borde
const textMainColor = document.getElementsByClassName('font-mainColor-s1');//color de letra principal
const textComp = document.getElementsByClassName('font-compColor-s1'); //texto de footer

document.body.addEventListener('change', (e) => {
    let target = e.target;
    switch (target.id) {
        case 'option1':
            for (let i = 0; i < mainBackColor.length; i++) {
                mainBackColor[i].style.backgroundColor = mainStyle1; //color de fondo principal
            }
            for (let i = 0; i < compBackColor.length; i++) {
                compBackColor[i].style.backgroundColor = compStyle1; //color de footer

            }
            for (let i = 0; i < borderColor.length; i++) {
                borderColor[i].style.borderColor = compStyle1; //color de borde

            }
            for (let i = 0; i < textMainColor.length; i++) {
                textMainColor[i].style.color = compStyle1; //color de letras principal

            }
            for (let i = 0; i < textComp.length; i++) {
                textComp[i].style.color = mainStyle1; //letras de footer
            }
            //imagenes para navbar y footer
            
            $logo.src = "assets/images/logo-s1.png";
            $facebook.src = "assets/images/fb-s1.png";
            $instagram.src = "assets/images/insta-s1.png";
            $twitter.src = "assets/images/twit-s1.png";
            $youtube.src = "assets/images/you-s1.png";
            $cartImage.src = "assets/images/style1.png"; 

            break;

        case 'option2':
            for (let i = 0; i < mainBackColor.length; i++) {
                mainBackColor[i].style.backgroundColor = mainStyle2;
            }
            for (let i = 0; i < compBackColor.length; i++) {
                compBackColor[i].style.backgroundColor = compStyle2;
            }
            for (let i = 0; i < borderColor.length; i++) {
                borderColor[i].style.borderColor = compStyle2; //color de footer

            }
            for (let i = 0; i < textMainColor.length; i++) {
                textMainColor[i].style.color = compStyle2; //color de letras principal

            }
            for (let i = 0; i < textComp.length; i++) {
                textComp[i].style.color = mainStyle2; //letras de footer
            }
            //imagenes para header y footer
            $logo.src = "assets/images/logo-s2.png";//imagenes
            $cartImage.src = "assets/images/style2.png";
            $facebook.src = "assets/images/fb-s2.png";
            $instagram.src = "assets/images/insta-s2.png";
            $twitter.src = "assets/images/twit-s2.png";
            $youtube.src = "assets/images/you-s2.png";
            

            break;

        case 'option3':
            for (let i = 0; i < mainBackColor.length; i++) {
                mainBackColor[i].style.backgroundColor = mainStyle3;
            }
            for (let i = 0; i < compBackColor.length; i++) {
                compBackColor[i].style.backgroundColor = compStyle34;
            }
            for (let i = 0; i < borderColor.length; i++) {
                borderColor[i].style.borderColor = compStyle34; //color de footer

            }
            for (let i = 0; i < textMainColor.length; i++) {
                textMainColor[i].style.color = compStyle34; //color de letras principal

            }
            for (let i = 0; i < textComp.length; i++) {
                textComp[i].style.color = mainStyle3; //letras de footer
            }
            //imagenes para header y footer
            $cartImage.src = "assets/images/style34.png";
            $logo.src = "assets/images/logo-s3.png";
            $facebook.src = "assets/images/fb-s3.png";
            $instagram.src = "assets/images/insta-s3.png";
            $twitter.src = "assets/images/twit-s3.png";
            $youtube.src = "assets/images/you-s3.png";
             

            break;

        case 'option4':
            for (let i = 0; i < mainBackColor.length; i++) {
                mainBackColor[i].style.backgroundColor = mainStyle4;
            }
            for (let i = 0; i < compBackColor.length; i++) {
                compBackColor[i].style.backgroundColor = compStyle34;
            }
            for (let i = 0; i < borderColor.length; i++) {
                borderColor[i].style.borderColor = compStyle34; //color de footer

            }
            for (let i = 0; i < textMainColor.length; i++) {
                textMainColor[i].style.color = compStyle34; //color de letras principal

            }
            for (let i = 0; i < textComp.length; i++) {
                textComp[i].style.color = mainStyle4; //letras de footer
            }
            //imagenes para header y footer
            $cartImage.src = "assets/images/style34.png";//imagen carrito
            $logo.src = "assets/images/logo-s4.png";
            $facebook.src = "assets/images/fb-s4.png";
            $instagram.src = "assets/images/insta-s4.png";
            $twitter.src = "assets/images/twit-s4.png";
            $youtube.src = "assets/images/you-s4.png"; 
            

            break;
    }

});