let carousel = $(".carousel1"),
    currdeg  = 0;

window.addEventListener("resize", responsiveScreen);

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}

function responsiveScreen(){
  let screen =  window.innerWidth;
  if(screen<=930){
      console.log("pantalla pequeña");
      carousel.css({
        "-webkit-transform": "rotateY(0deg)",
        "-moz-transform": "rotateY(0deg)",
        "-o-transform": "rotateY(0deg)",
        "transform": "rotateY(0deg)"
      });
  
  }
}