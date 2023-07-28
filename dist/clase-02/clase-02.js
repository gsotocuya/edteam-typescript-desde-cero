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
