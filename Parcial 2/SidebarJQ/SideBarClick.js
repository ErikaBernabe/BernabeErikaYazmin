window.onload = function(){

    document.getElementById("btnMenu").addEventListener("click",function(){
        // console.log("click en boton")
        
        document.getElementById("miMenu").classList.toggle("menuEscondido");
        document.getElementById("miContenido").classList.toggle("contenidoMenuEscondido");
    });

}