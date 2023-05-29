create database peliculas
use peliculas;

create table pelicula
(
    Id int(10),
    Nombre varchar(30),
    Genero text,
    FechaEstreno text,
    Duracion text,
    primary key(Id)
);

insert into pelicula(Id, Nombre, Genero, FechaEstreno, Duracion)
values (1, 'Avatar','CienciaFiccion', '28-05-2002', '2:20:15' );

insert into pelicula(Id, Nombre, Genero, FechaEstreno, Duracion)
values (2, 'Mama','Terror', '15-02-2009', '1:40:35' );

insert into pelicula(Id, Nombre, Genero, FechaEstreno, Duracion)
values (3, 'Batman','Accion', '26-08-2002', '2:10:25' );

select * from pelicula;