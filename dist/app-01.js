"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//DECORADORES
function Entidad(config) {
    console.log("Entidad", config);
    return function (target) {
        //Dinamicamente: asignamos la propiedad clave a la clase
        target.clave = config.clave;
        console.log("target", target);
    };
}
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
function readonly(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
}
let Curso = class Curso {
    constructor(_id, _nombre) {
        this._id = _id;
        this._nombre = _nombre;
        this.prueba = "";
    }
    getPrueba() {
        return this.prueba;
    }
    lectura() { }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
};
__decorate([
    enumerable(true) // no aparece como propiedad
], Curso.prototype, "getPrueba", null);
__decorate([
    readonly
], Curso.prototype, "lectura", null);
Curso = __decorate([
    Entidad({
        clave: "CURSO",
    })
], Curso);
let EscuelaDigital = class EscuelaDigital {
};
EscuelaDigital = __decorate([
    Entidad({
        clave: "ESCUELA_DIGITAL",
    })
], EscuelaDigital);
function analizarClase(clase) {
    console.log("clave:", clase.clave);
}
function mostrarPropiedades(clase) {
    for (let prop in clase.prototipe) {
        console.log("prop", prop);
    }
}
let typescript = new Curso(1, "TypeScript");
analizarClase(Curso); //parametro: una clase
//sobrescritura de la function
// typescript.lectura = function() {}; //error
let escuela = new EscuelaDigital();
analizarClase(EscuelaDigital);
mostrarPropiedades(Curso);
