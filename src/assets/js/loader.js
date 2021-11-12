var loader = document.getElementById("loader");
window.addEventListener("load", function(){
    loader.style.height = "100px";
    loader.style.width = "100px";
    loader.style.visibility = "hidden", opacity; "0";
    document.body.style.overflowY= "visible";// despueés de cargar le devolvemos el scroll
}, 10000);

