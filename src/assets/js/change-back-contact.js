const $back = document.querySelector('#back'); //cuerpo del body
const $style = document.querySelector('#colorSelect'); /* identificar cuando eleigió color */
const $letter = document.querySelector('#letter'); //imagen de sobre

document.body.addEventListener('change', (e) => {
    let target = e.target;
    switch (target.id) {
        case 'option1':
            $back.style.backgroundImage='linear-gradient(90deg, rgba(37,105,184,0.6702031154258579) 100%, rgba(37,105,184,0.404096672848827) 100%), url("assets/images/contact/collage1.png")'; //cambia el color de fondo
            $letter.src = "assets/images/contact/letter-s1.png"; //imagen de sobre
            break;
            case 'option2':
                /*  ; */
                $back.style.backgroundImage='linear-gradient(90deg, rgba(115,149,73,0.43771011822697825) 0%, rgba(115,149,73,0.6842087176667542) 0%),url("assets/images/contact/collage1.png")';
                $letter.src = "assets/images/contact/letter-s2.png";
            break;
            case 'option3':
                $back.style.backgroundImage="linear-gradient(90deg, rgba(228,77,65,1) 0%, rgba(228,77,65,0.6057773451177346) 0%), url('assets/images/contact/collage1.png')";
                $letter.src = "assets/images/contact/letter-s34.png";
            break;
            case 'option4':
                $back.style.backgroundImage="linear-gradient(90deg, rgba(254,196,81,1) 0%, rgba(254,196,81,0.6561975131849616) 0%), url('assets/images/contact/collage1.png')";
                $letter.src = "assets/images/contact/letter-s34.png"
            break;


    }
});