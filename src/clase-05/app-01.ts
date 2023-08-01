export {};

import { Curso} from './modelo/curso';
import { EscuelaDigital } from './modelo/escuela-digital';
import { analizarClase, mostrarPropiedades , PI} from "./util";



let typescript = new Curso(1, "TypeScript");
analizarClase(Curso); //parametro: una clase
//sobrescritura de la function
// typescript.lectura = function() {}; //error
let escuela = new EscuelaDigital();
analizarClase(EscuelaDigital);
mostrarPropiedades(Curso);

console.log('valor de PI:', PI)