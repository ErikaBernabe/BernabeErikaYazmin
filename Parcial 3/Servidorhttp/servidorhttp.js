let http = require('http')

let servidor = http.createServer(function(req, res){
    res.write('Servidor HTTP y contestando rapido!!!'); //Escribir respuesta
    res.end();                                          //Finalizar respuesta
})



servidor.listen(8081, ()=>{console.log('Servidor http listo')});