const express = require('express')
const app = express();

app.post('/', (req, res)=>{
    res.json({respuesta:"Respuesta a peticion get"})
})

app.get('/', (req, res)=>{
    res.json({respuesta:"Respuesta a peticion get"})
})

app.listen(8082, (req, res)=>{
})
    console.log('Servidor express escuchando en pto 8082')



// $npm init -y

// npm install express creo que esto se intala primero

// $npm i express
//       --save-dex

// npm i mysqual para conectar con mysqual