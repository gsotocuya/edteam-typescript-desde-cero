"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// atributos y metodos estaticos / static
var MisCursos;
(function (MisCursos) {
    MisCursos[MisCursos["JavaScript"] = 0] = "JavaScript";
    MisCursos[MisCursos["TypeScript"] = 1] = "TypeScript";
    MisCursos[MisCursos["Angular"] = 2] = "Angular";
})(MisCursos || (MisCursos = {}));
class Curso {
    constructor(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
    }
    get id() {
        //permite obtener el estado de "id"
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    static getInfo(c) {
        return JSON.stringify(c);
    }
}
Curso.cursosDisponibles = [MisCursos.JavaScript, MisCursos.TypeScript];
class Escuela {
    constructor(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
        this.cursos = [];
    }
    get id() {
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
    agregarCurso(curso) {
        this.cursos.push(curso);
    }
}
class EscuelaDigital extends Escuela {
    constructor(id, nombre, _paginaWeb) {
        super(id, nombre); //reusar el constructor de la superclase
        this._paginaWeb = _paginaWeb;
    }
    get paginaWeb() {
        return this._paginaWeb;
    }
    set paginaWeb(paginaWeb) {
        this._paginaWeb = paginaWeb;
    }
}
// const miEscuela = new Escuela(1,'Edteam'); // clase abstracta!
const escuela = new EscuelaDigital(1, 'EDteam', 'ed.team');
let cursoJS = new Curso(1, 'JavaScript');
let cursoTS = new Curso(2, "TypeScript");
escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
// Acceder a los atriburos publicos;
// modo lectura
// cursoJS.nombre = 'JavaScript desde Cero'; //Asignación: SET
console.log('nombre cursoJS', cursoJS.nombre); //Leyendo estado; GET
// cursoJS.setNombre('JavaScript desde Cero'); 
// cursoJS.id = 20; // asignacion: set
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre); //leyendo estado: GET
console.log('escuela.paginaWeb', escuela.paginaWeb);
console.log('Mis cursos', Curso.cursosDisponibles);
console.log("CursoJS", Curso.getInfo(cursoJS));
