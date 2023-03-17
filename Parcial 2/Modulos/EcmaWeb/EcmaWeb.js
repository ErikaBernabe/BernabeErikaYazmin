import * as areas from "./areas.js";
//import {areaCuadrado} from "./areas.js";

document.getElementById("btn").addEventListener("click", function(e)
{    
    //console.log(e); es un objeto que es un evento

    let valorBase=  document.getElementById('base').value;
    let valorAltura=  document.getElementById('altura').value;

    // let valorLado= document.getElementById('lado1').value;
    // let valorAltura= document.getElementById('lado2').value;

    //let valorArea = areas.areaCuadrado(valorBase, valorAltura);

    let valorArea = areas.areaTriangulo(valorBase, valorAltura)
    document.getElementById("area").innerText=valorArea

    e.preventDefault();
});
