/* 
var readlineSync = require('node_modules/readline/readline.js'); */
var readlineSync = require('readline-sync');

var nombreUsuario = readlineSync.question ( '¿Puede darme su nombre?'); 

console.log( 'Hola  ' +  nombreUsuario  + ' ! ' );
