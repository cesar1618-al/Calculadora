window.onload = function() {
    var pantalla,
     salida,
     limite,
     cero,
     punto,
     operador,
     hayPunto = false;

 pantalla = document.getElementById("resultado");
 var elem = document.querySelectorAll(".num");
 var len = elem.length;

for(var i =0; i < len; i++ ){
    elem[i].addEventListener("click",function(){
        num= this.value;
        salida = pantalla.innerHTML +=num;
        limite = salida.length;
        if(limite > 16 ){
        alert("No se pueden insertar más números");
        }   
    },false);
}

document.querySelector(".cero").addEventListener("click",function() {
    cero = this.value;
},false);

document.querySelector(".punto").addEventListener("click",function() {
    punto = this.value;
    if(pantalla.innerHTML === ""){
    salida = pantalla.innerHTML = pantalla,innerHTML.concat("0.");
    }
    else if(pantalla.innerHTML === salida && !hayPunto){
    pantalla.innerHTML = pantalla.innerHTML.cancat(".");
    }
    else if(pantalla.innerHTML == salida+operador){
        pantalla.innerHTML = pantalla.innerHTML.concat("0.");
    }
    hayPunto = true;
},false);

document.querySelector("#eqn-bg").addEventListener("click",function() {
    if(pantalla.innerHTML === salida){
    pantalla.innerHTML = eval(salida);
    salida = pantalla.innerHTML;
    hayPunto = false;
    }
    else {pantalla.innerHTML = "";}
},false);

document.querySelector("#botonGrande").addEventListener("click",function() {
    pantalla.innerHTML = "";
    hayPunto = false;
},false);

var elem1 = document.querySelectorAll(".operador");
var len1 = elem1.length;
    for(var i = 0; i < len1; i++){
     elem[i].addEventListener("click",function(){
     operador = this.value;
     if(pantalla.innerHTML === ""){
        pantalla.innerHTML = pantalla.innerHTML.concat("");
     }
    },false);
}
}