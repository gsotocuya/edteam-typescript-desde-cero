"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curso_1 = require("./modelo/curso");
const escuela_digital_1 = require("./modelo/escuela-digital");
const util_1 = require("./util");
let typescript = new curso_1.Curso(1, "TypeScript");
(0, util_1.analizarClase)(curso_1.Curso); //parametro: una clase
//sobrescritura de la function
// typescript.lectura = function() {}; //error
let escuela = new escuela_digital_1.EscuelaDigital();
(0, util_1.analizarClase)(escuela_digital_1.EscuelaDigital);
(0, util_1.mostrarPropiedades)(curso_1.Curso);
console.log('valor de PI:', util_1.PI);
