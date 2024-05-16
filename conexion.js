import mysql from 'mysql';
import fs from 'fs';

//const express = require('express');
//const fs = require('fs');

//const app = express();

//"type": "module", (en package.json)
//const mysql = mysql();

//const mysql = require('mysql');



const connection = mysql.createConnection({
    server: 'localhost',
    database: 'pub',
    port: '2121',
    /*options: {
        trustedConnection: true // Habilitar la autenticación de Windows
    }*/
    user: 'root',
    password: 'root'
});

connection.connect(function(err){
    if(err) {
        throw err;
    } else {
        console.log("Conexión exitosa");
    }
});

connection.query('SELECT * FROM clientes', function(error, lista){
    if(error){
        throw error;
    } else {
        console.log(lista);

        fs.writeFile('clientes.json', JSON.stringify(lista), (err) => {
            if (err) throw err;
            console.log('Archivo JSON de empleados creado');
        });
    }
})
/*
console.log("hola");

app.get("/clientes", (req,res)=>{
    connection.query('SELECT * FROM clientes', (err, results) => {
        if (err) throw err;
 
        // Guardar los resultados en un archivo JSON
        fs.writeFile('clientes.json', JSON.stringify(results), (err) => {
            if (err) throw err;
            console.log('Archivo JSON de empleados creado');
        });
 
        res.send('Archivo JSON de empleados creado'); // Confirmación de creación

        if (err) {
            console.error('Error al escribir el archivo JSON:', err);
            res.status(500).send('Error interno del servidor');
            return;
        }
        console.log('Archivo JSON de empleados creado');
        res.send('Archivo JSON de empleados creado');

    });
});*/
connection.end();
