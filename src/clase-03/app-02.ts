export {}; //Modulo en TS
// ALIAS PARA TIPOS DE DATOS EN TS

let curso: string = 'TypeScript';
// Cursos codigo: JavaScript = 1, Type = 2

type Curso = string | number;



let cursoNuevo: Curso;
// cursoNuevo = true;
cursoNuevo = 'JavaScript';
cursoNuevo = 2; // TypeScript

function getCurso(): Curso{
    // return 'JavaScript';
    return 1;
}

//arreglos
let cursos: string[] = ['JavaScript', 'TypeScript']
let cursos2: Curso[] = ['JavaScript', 'TypeScript',1]

console.log('cursos', cursos);
console.log('cursos2', cursos2);

