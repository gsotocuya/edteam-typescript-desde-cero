export {};
// MIEMBROS PUBLICOS

class Curso {
    public id: number; // public
    public nombre: string; //public 
    constructor(id: number, nombre:string) {
        this.id = id;
        this.nombre = nombre;
    }
}

class EscuelaDigital{

    //atributos
    public nombre : string;
    public cursos: Curso[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public agregarCurso(curso: Curso):void{
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

