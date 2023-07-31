export {};
//DECORADORES

function Entidad(target: any){
    console.log('Entidad', target)
}

@Entidad
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

let typescript = new Curso(1, 'TypeScript');

