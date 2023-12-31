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
// string
let nombre = 'Luis';
let apellido = 'Aviles';
let nombreCompleto = nombre + ' ' + apellido;
console.log('nombre Completo ', nombreCompleto);
//string + ES template literals
let nombreCompleto2 = `${nombre} ${apellido}`;
console.log('nombrecompleto2', nombreCompleto2);
let arregloCursos = ['TypeScript', 'Angular'];
let mensaje = `
Mi nombre es ${nombreCompleto} y tengo ${arregloCursos.length} cursos.
¡Gracias por asistir!
`;
console.log("mensaje", mensaje);
// tipos especiales en TypeScript
// tipo: any
let desconocido; //seria como: var desconocido;
desconocido = 'hola';
desconocido = 2;
let desconocido2 = 2;
//Tipo: Void
let vacio;
function mostrarContenido(curso) {
    const mensaje = curso ? `Bienvenido al curso ${curso}` : 'Suscribete al curso!';
    console.log('mensaje', mensaje);
}
// console.log('typescript', mostrarContenido('typescript'));
mostrarContenido("typescript");
//tipo : Never
let nunca;
function returnaError(error) {
    throw new Error('Error TypeScript.' + error);
    //Nunca retorna un valor!
}
// returnaError("valor inesperado");
function cicloInfinito() {
    while (true) {
    }
}
// tipo: null y undefined
let variableUndefined = undefined;
let variableNull = null;
function retornoNull() {
    return null;
}
function retornoUndefined() {
    return undefined;
}
let variableSinValor = undefined;
console.log('variableSinValor', undefined);
function saludo(nombre) {
    if (nombre)
        return 'Hola ' + nombre;
    return 'Hola!';
}
console.log(saludo(nombreCompleto));
console.log(saludo());
//Arreglos en TypeSCript
let cursos;
cursos = ["TypeScript", "Angular"];
// Arreglos con Generics
let nombres;
nombres = ['Luis Aviles', 'Alvaro Felipe'];
let arreglo = [2, 'cadena', true]; // Evitar any
//Tuplas
let infoCoursos = ['typescript', 100];
infoCoursos = ['angular', 200];
let curso = ['typescript', 150, '08/2019'];
console.log('curso', curso);
let nuevosInscritos = 10;
console.log('fecha de inicio', (curso[2]));
console.log("total de inscritos", curso[1] + nuevosInscritos);
let tuplaTest = ['a', 'b'];
let tuplaTemp = ['c', 'd'];
tuplaTemp = tuplaTest;
console.log('tuplaTemp', tuplaTemp);
