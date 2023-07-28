// Tipos primitivos o Tipos Básico
// Boolean
let estaConectado = true;
let estaInscrito : boolean;
estaInscrito = true;
// estaInscrito = 2; No es valido

function tieneDescuento(curso){
    if(curso === 'typescript')
        return true;
    return false;
}

console.log(`tieneDescuento('angular'):`,tieneDescuento('angular'));


//Number
let estudiantes = 100;
estudiantes = '100'; //Invalido
let cantidadEstudiantes: number;
cantidadEstudiantes = 120;

function getCantidadEstudiantes(curso): number{
    if(curso === 'typescript')
        return 100;
    return 0;
}

let inscritosCursoTypescript: number = 100;

//Type: Number, Hexadecimales
let decimal: number = 10;
let hexadecimal: number = 0xf00d;
console.log('decimal ', decimal);
console.log('hexadecimal ', hexadecimal);

//Type: number, binario
let binario: number = 0b1010;
console.log('binario', binario);

//type: number, octal
let octal: number = 0o755;
console.log('octal ', octal)

// string
let nombre = 'Luis';
let apellido: string = 'Aviles';
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
let desconocido2: any = 2;

//Tipo: Void
let vacio: void;
function mostrarContenido(curso: string): void{
    const mensaje = curso ? `Bienvenido al curso ${curso}` : 'Suscribete al curso!';
    console.log('mensaje', mensaje); 
}

// console.log('typescript', mostrarContenido('typescript'));
mostrarContenido("typescript");

//tipo : Never
let nunca: never;
function returnaError(error: string): never{
    throw new Error('Error TypeScript.' + error);
    //Nunca retorna un valor!
}

// returnaError("valor inesperado");

function cicloInfinito(): never{
    while(true){      
    }
}

// tipo: null y undefined
let variableUndefined: undefined = undefined;
let variableNull: null = null;

function retornoNull(): null {
    return null;
}

function retornoUndefined(): undefined {
    return undefined;
}

let variableSinValor = undefined;
console.log('variableSinValor', undefined);

function saludo(nombre?:string): string {
    if(nombre)
        return 'Hola ' + nombre;
    return 'Hola!'
}

console.log(saludo(nombreCompleto));
console.log(saludo());

//Arreglos en TypeSCript
let cursos: string[];
cursos = ["TypeScript", "Angular"];

// Arreglos con Generics
let nombres: Array<string>;
nombres = ['Luis Aviles', 'Alvaro Felipe'];

let arreglo: any[] = [2, 'cadena', true];  // Evitar any

//Tuplas
let infoCoursos:[string, number] = ['typescript', 100];
infoCoursos = ['angular', 200];

let curso: [string, number, string] = ['typescript', 150, '08/2019'];
console.log('curso', curso);
let nuevosInscritos = 10;

console.log('fecha de inicio', (curso[2]))
console.log("total de inscritos", curso[1] + nuevosInscritos);

let tuplaTest: [string, string] = ['a', 'b'];
let tuplaTemp: [string, string] = ['c', 'd'];

tuplaTemp = tuplaTest;
console.log('tuplaTemp', tuplaTemp)
