"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// aseciones de tipo en typescript | Type Assertions
let codigoCurso;
codigoCurso = 100;
let numberCurso = codigoCurso;
console.log('numero curso', numberCurso);
let estudiante2 = {};
estudiante2.nombre = 'Roberto';
estudiante2.curso = 'TypeScript';
let estudiante3 = `{"nombre" : "Juan", "curso": "JavaScript"}`;
let objetoEstudiante = JSON.parse(estudiante3);
console.log('estudiante', objetoEstudiante);
