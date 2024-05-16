import mysql from 'mysql';
import fs from 'fs';

//const express = require('express');

//const app = express();

const connection = mysql.createConnection({
    server: 'localhost',
    database: 'pub',
    port: '2121',
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

connection.end();
