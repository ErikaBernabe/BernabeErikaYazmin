new gridjs.Grid({
    columns:['Id','Nombre','Genero','FechaEstreno',Duracion],
    server:{
        url:'http://localhost:8082/pelicula',
        then: data=> data.map(pelicula=>[pelicula.Id,pelicula.Nombre,pelicula.Genero,pelicula.FechaEstreno, pelicula.Duracion])
    }
}).render(document.getElementById("wrapper"))