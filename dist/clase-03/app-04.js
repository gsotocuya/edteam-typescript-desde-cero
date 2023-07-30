"use strict";
//Enumerados en Typescript
// type Curso: string | number;
var Curso;
(function (Curso) {
    Curso[Curso["JavaScript"] = 0] = "JavaScript";
    Curso[Curso["Typescript"] = 1] = "Typescript";
    Curso[Curso["Angular"] = 2] = "Angular";
})(Curso || (Curso = {}));
let curso = Curso.Typescript;
console.log('curso', curso);
console.log('curso', Curso[curso]);
// otro ejemplo
var Dia;
(function (Dia) {
    Dia[Dia["Lunes"] = 0] = "Lunes";
    Dia[Dia["Martes"] = 1] = "Martes";
    Dia[Dia["Miercoles"] = 2] = "Miercoles";
    Dia[Dia["Jueves"] = 3] = "Jueves";
    Dia[Dia["Viernes"] = 4] = "Viernes"; // i = 4
})(Dia || (Dia = {}));
console.log('Viernes', Dia.Viernes);
var FinSemana;
(function (FinSemana) {
    FinSemana[FinSemana["Sabado"] = 5] = "Sabado";
    FinSemana[FinSemana["Domingo"] = 6] = "Domingo";
})(FinSemana || (FinSemana = {}));
console.log('Sabado', FinSemana.Sabado);
console.log('Sabado', FinSemana.Domingo);
// control sobre los valores para Enumerados
var Mes;
(function (Mes) {
    Mes["Enero"] = "Ene";
    Mes["Febrero"] = "Feb";
    Mes["Marzo"] = "Mar";
    Mes["Abril"] = "Abr";
})(Mes || (Mes = {}));
console.log('Marzo', Mes.Marzo);
