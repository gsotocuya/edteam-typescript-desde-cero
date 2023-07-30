export {};

class EscuelaDigital{

    //atributos
    nombre : string;
    cursos: string [] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    agregarCurso(curso: string):void{
        this.cursos.push(curso);
    }
}

const escuela = new EscuelaDigital('EDteam');
escuela.agregarCurso('JavaScript');
escuela.agregarCurso("TypeScript");
console.log(escuela);
console.log(escuela.nombre);

