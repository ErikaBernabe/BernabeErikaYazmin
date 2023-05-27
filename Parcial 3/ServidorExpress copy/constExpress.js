// const { error } = require('console');
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors =require('cors');
const bodyParser = require('body-parser');

// app.use(express.json());
app.use(bodyParser.json());
app.use(cors());



 //Mostrar Toda la tabla
 app.get('/pelicula', (req, res) => {
  
    const connection = mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'peliculas'
    });

      connection.connect();
            
      connection.query(`SELECT * FROM pelicula `, function (error, results, fields) {
          if (error) {
              res.json(error);
          } else {
              if (results.length === 0) {
                  res.json({ Mensaje: "Pelicula no encontrada" });
              } else {
                  res.json(results);
              }
          }
      });

      connection.end();
  
});

//CONSULTA2 Mostrar solo uno con el Id
app.get('/pelicula/:Id', (req, res) => {
    
    //podria ser req.params.id    tambien con .body.id    query.id
      if (typeof(req.params.Id) === 'undefined') {
          res.json({ estado:0,
          resultado: "Debe enviar el ID del género" });
      } else {
          const connection = mysql.createConnection({
              host: 'localhost',
              user: 'root',
              password: '',
              database: 'peliculas'
          });
  
          connection.connect();
                                                         //podria ser req.params.id   tambine con req.body.id    
          connection.query(`SELECT * FROM pelicula WHERE Id=${req.params.Id}`, function (error, results, fields) {
              if (error) {
                  res.json({estado:0, resultado:error.sqlMessage});
              } else {
                  if (results.length === 0) {
                      res.json({estado:0, resultado: "pelicula no encontrada" });
                  } else {
                      res.json({estado:1, resultado:results[0]});
                  }
              }
          });
  
          connection.end();
      }
  });


//BORRAR
app.delete('/pelicula/:Id', (req, res)=>{
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
            res.json({estado:1,resultado:"pelicula borrada"});

        }else{
            res.json({estado:0, resultado:"ocurrio un error en la eliminacion"});

        }
    }

    });
    connection.end();

  }
})

//ALTA
app.post('/pelicula', (req, res)=>{
   
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password : '',
        database: 'peliculas'

    });
      
    let sentenciasql="insert into pelicula values("+req.body.Id+","+
                                                "'"+req.body.Nombre+"',"+
                                                "'"+req.body.Genero+"',"+
                                                "'"+req.body.FechaEstreno+"',"+
                                                "'"+req.body.Duracion+"'"+")";

     console.log(sentenciasql);

     connection.connect();                                           

    connection.query(sentenciasql,function(error, results,fields){

     if(error){
         res.json(error);

     }else{
       console.log(results);
       res.json(results);
    }

    });
    connection.end();

  
})

//MODIFICAR
app.put('/pelicula/:Id', (req, res) => {

    let sentenciaSQL="update pelicula set " +
   "Nombre='"+req.body.Nombre+"',"+
   "Genero='"+req.body.Genero+"',"+
   "FechaEstreno='"+req.body.FechaEstreno+"',"+
    "Duracion='"+req.body.Duracion+"'"+"where Id="+req.params.Id;

    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password : '',
        database: 'peliculas'
        
    });
    connection.connect();

    connection.query(sentenciaSQL,function(error, results,fields){
        if(error){
            res.json(error);

        }else{
            console.log(results);

            if(results.affectedRows==1){
                res.json({estado:1,
                resultado:"Pelicula Modificada"});
            }else{
                res.json({estado:1,
                resultado:"Ocurrio un error"});
            }

        }
    });
    connection.end();
});
// app.put('/pelicula/:Id', (req, res) => {
  
//      let sentenciasql="update pelicula set"+
//                                                 "Nombre='"+req.body.Nombre+"',"+
//                                                 "Genero='"+req.body.Genero+"',"+
//                                                 "FechaEstreno='"+req.body.FechaEstreno+"',"+
//                                                 "Duracion='"+req.body.Duracion+"'"+"where Id"+req.params.Id;
//     //    let sentenciaSQL="update generosmusicales set "+
//     //    "nombre='"+req.body.nombre+"',"+
//     //    "descripcion='"+req.body.descripcion+"',"+
//     //    "popularidad='"+req.body.popularidad+"',"+
//     //    "fecha_creacion='"+req.body.fecha_creacion+"',"+
//     //    "ultima_modificacion='"+req.body.ultima_modificacion+"'"
//     //    +" where id="+ req.params.id;
                                    
//        const connection = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'peliculas'
//   });
    
   
//     connection.connect();
//        connection.query(sentenciaSQL, function (error, results, fields) {
//            if (error) {
//                res.json(error);
//            } else {
//                console.log(results);
//                if(results.affectedRows==1){
//                 res.json({estado:1,
//                 resultado:"Pelicula Modificado"});
//                } else{
//                 res.json({estado:1,
//                 resultado:"Ocurrio un error"});
//                }
//            }
//        });

//        connection.end();
  
//  });


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