// const { error } = require('console');
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors =require('cors');
const bodyParser = require('body-parser');

// app.use(express.json());
app.use(bodyParser.json());
app.use(cors());


//CONSULTA
app.get('/cliente', (req, res)=>{
    // app.get('/cliente/:id_cliente', (req, res)=>{
    
    //Para validar si el cliente puso un id para buscar el dato
    if(typeof(req.query.Id)=== `undefined`){
        res.json({mensaje: "Debe de enviar el parametro Id EN LA CADENA DE CONSULTA"})

    }else{

        
    //var   
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password : '',
        database: 'peliculas'

    });
    connection.connect();
    connection.query(`SELECT * FROM pelicula WHERE Id = ${req.query.Id}`,function(error, results,fields){

    //para validar si el id que pusierin no esta, si esta mal la forma de la consulta en la linea 26, si no pueron id
     if(error){
         res.json(error);

     }else{
        if(results.length==0){
            res.json({mensaje: "Id de la Pelicula no encontrada"});

        }else{
            res.json(results);

        }
    }

    });
    connection.end();

  }
})


//BORRAR
app.delete('/cliente/:Id', (req, res)=>{
    // app.get('/cliente/:id_cliente', (req, res)=>{
    
    //Para validar si el cliente puso un id para buscar el dato
    if(typeof(req.params.Id)=== `undefined`){
        res.json({estado:0,
                   resultado:"debe de enviar el parametro Id en la cadena de consulta"})

    }else{ 
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password : '',
        database: 'peliculas'

    });
    connection.connect();
    connection.query(`delete  from pelicula where Id = ${req.params.Id}`,function(error, results,fields){

    //para validar si el id que pusierin no esta, si esta mal la forma de la consulta en la linea 26, si no pueron id
     if(error){
         res.json({estado:0,resultado:error.sqlMessage});

     }else{
        if(results.affectedRows==1){
            res.json({estado:1,resultado:"Cliente borrado"});

        }else{
            res.json({estado:0, resultado:"ocurrio un error en la eliminacion"});

        }
    }

    });
    connection.end();

  }
})











app.post('/', (req, res)=>{
    res.json({respuesta:"Respuesta a peticion get"})
})



app.listen(8082, (req, res)=>{
})
    console.log('Servidor express escuchando en puerto 8082')



// $npm init -y

// npm install express creo que esto se intala primero

// $npm i express
//       --save-dex

// npm i mysqual para conectar con mysqual


//este tendra el  se dede instalar en el servidor express npm install cors