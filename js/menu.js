const enlaces = document.getElementsByClassName("enlaces")[0];
const hamburguesa = document.getElementsByClassName("menu")[0];
const menuHamburguesa = document.getElementById("menu");
let abierto = false;

const toggleMenu = () => {
    enlaces.classList.toggle("enlaces2");
    enlaces.style.transition = "transform 0.5s ease-in-out";
}

hamburguesa.addEventListener("click", function(){
    toggleMenu();
    if(document.querySelector("enlaces.enlaces2")){
        abierto = true;
    }else {
        abierto = false;
    }
})


window.addEventListener("click", function(e){
    this.console.log(e.target)
    if(abierto){
        if(e.target !== menuHamburguesa){
            toggleMenu();
            abierto = false;
        }
    }
})

window.addEventListener("risize", function(){
    if(screen.width > 800){
        if(abierto){
            toggleMenu();
            enlaces.style.transition = "none";
            abierto = false;
        }
    }
})