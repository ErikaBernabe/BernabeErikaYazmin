   /**
    * Funcion para calcular el area de un cuadrado
    * @param {Number} lado Medida lado del cuadrado
    * @returns Number
    */ 
    
function areaCuadrado(lado){
    return lado*lado;
}


/**
 *  Funcion para calcular el area de un triangulo
 * @param {Number}  base Base del triangulo 
 * @param {Number} altura  Altura del triangulo 
 * @returns Number
 */
function areaTriangulo(base,altura){
    return(base*altura)*2
}
// module.exports.areaCuadrado=areaCuadrado;
// module.exports.areaTriangulo=areaTriangulo
// console.log(module);

exports.areaCuadrado = areaCuadrado;
exports.areaTriangulo = areaTriangulo;
