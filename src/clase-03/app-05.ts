//interfaces en TypeScript

interface ICurso{
    nombre: string;
    identificador?: number;
}

let cursoTypeScript : ICurso = {
    nombre: 'TypeScript',
    identificador: 1
}  

cursoTypeScript = {
    nombre: 'JAvaScript',
    identificador: 1
}

let curso2: ICurso;
curso2 = {
    nombre: 'Angular',
}
curso2 = {
    nombre: 'TypeScript',
    identificador: 100
}

console.log('cursoTypeScript', cursoTypeScript)
