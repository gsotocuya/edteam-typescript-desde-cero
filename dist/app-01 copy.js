"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
escuela.agregarCurso('JavaScript');
escuela.agregarCurso("TypeScript");
console.log(escuela);
console.log(escuela.nombre);
