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


