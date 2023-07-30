"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Metodos set y get
class Curso {
    constructor(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
    }
    get id() {
        //permite obtener el estado de "id"
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
}
class EscuelaDigital {
    constructor(_nombre) {
        this._nombre = _nombre;
        //atributos
        this.cursos = [];
    }
    agregarCurso(curso) {
        this.cursos.push(curso);
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
}
const escuela = new EscuelaDigital('EDteam');
let cursoJS = new Curso(1, 'JavaScript');
let cursoTS = new Curso(2, "TypeScript");
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
// Acceder a los atriburos publicos;
cursoJS.nombre = 'JavaScript desde Cero'; //Asignación: SET
console.log('nombre cursoJS', cursoJS.nombre); //Leyendo estado; GET
// cursoJS.setNombre('JavaScript desde Cero'); 
cursoJS.id = 20; // asignacion: set
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre); //leyendo estado: GET
