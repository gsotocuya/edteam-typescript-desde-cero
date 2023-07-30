"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MIEMBROS PUBLICOS
class Curso {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}
class EscuelaDigital {
    constructor(nombre) {
        this.cursos = [];
        this.nombre = nombre;
    }
    agregarCurso(curso) {
        this.cursos.push(curso);
    }
}
const escuela = new EscuelaDigital('EDteam');
let cursoJS = new Curso(1, 'JavaScript');
let cursoTS = new Curso(2, "TypeScript");
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
// Acceder a los atriburos publicos;
cursoJS.nombre = 'JavaScript desde Cero';
cursoJS.id = 20;
console.log(escuela);
console.log(escuela.nombre);
