export {};
//DECORADORES

function Entidad(config:any){
    console.log('Entidad', config)

    return function(target: any){
        //Dinamicamente: asignamos la propiedad clave a la clase
        target.clave = config.clave;
        console.log('target', target);
    }
}

@Entidad({
    clave: 'CURSO'
})
class Curso {
  constructor(private _id: number, private _nombre: string) {}

  get id() {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nombre: string) {
    this._nombre = nombre;
  }
}
@Entidad({
    clave: 'ESCUELA_DIGITAL'
})
class EscuelaDigital {

}

function analizarClase(clase: any){
    console.log('clave:' clase.clave);
}

let typescript = new Curso(1, 'TypeScript');
analizarClase(Curso); //parametro: una clase
let escuela = new EscuelaDigital();
analizarClase(EscuelaDigital);