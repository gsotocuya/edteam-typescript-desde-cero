export {};
// MIEMBROS PRIVADO

class Curso {
    constructor(private id: number, private nombre:string) {}
}

class EscuelaDigital{

    //atributos
    private cursos: Curso[] = [];

    constructor(private nombre: string) {}

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
// cursoJS.nombre = 'JavaScript desde Cero';
// cursoJS.id = 20;
console.log(escuela);
// console.log(escuela.nombre); //nombre es privado

