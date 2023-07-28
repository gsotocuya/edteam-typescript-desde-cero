"use strict";
// Tipos primitivos o Tipos Básico
// Boolean
let estaConectado = true;
let estaInscrito;
estaInscrito = true;
// estaInscrito = 2; No es valido
function tieneDescuento(curso) {
    if (curso === 'typescript')
        return true;
    return false;
}
console.log(`tieneDescuento('angular'):`, tieneDescuento('angular'));
//Number
let estudiantes = 100;
estudiantes = '100'; //Invalido
let cantidadEstudiantes;
cantidadEstudiantes = 120;
function getCantidadEstudiantes(curso) {
    if (curso === 'typescript')
        return 100;
    return 0;
}
let inscritosCursoTypescript = 100;
//Type: Number, Hexadecimales
let decimal = 10;
let hexadecimal = 0xf00d;
console.log('decimal ', decimal);
console.log('hexadecimal ', hexadecimal);
//Type: number, binario
let binario = 0b1010;
console.log('binario', binario);
//type: number, octal
let octal = 0o755;
console.log('octal ', octal);
