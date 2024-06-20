CREATE DATABASE agenda_db;
USE agenda_db;

CREATE TABLE notas(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(200),
    materia VARCHAR (200),
    descripcion VARCHAR(255),
    fechCreacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fechLimite VARCHAR (200)
);

DESCRIBE notas;