function areaCuadrado(lado){
    return lado*lado;
}

function areaTriangulo(base,altura){
    return(base*altura)*2
}
// module.exports.areaCuadrado=areaCuadrado;
// module.exports.areaTriangulo=areaTriangulo
// console.log(module);

exports.areaCuadrado = areaCuadrado;
exports.areaTriangulo = areaTriangulo;