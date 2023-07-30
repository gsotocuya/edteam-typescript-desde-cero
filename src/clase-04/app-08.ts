export {};

// atributos y metodos estaticos / static

enum MisCursos{
  JavaScript = 0,
  TypeScript = 1,
  Angular = 2
}


class Curso {
  public static cursosDisponibles: MisCursos[] = [MisCursos.JavaScript, MisCursos.TypeScript];
  constructor(private readonly _id: number, private readonly _nombre: string) {}

  get id() {
    //permite obtener el estado de "id"
    return this._id;
  }
  get nombre() {
    return this._nombre;
  }

  static getInfo(c: Curso){
    return JSON.stringify(c);
  }
}

abstract class Escuela {
  protected cursos: Curso[] = [];
  constructor(protected _id: number, protected _nombre: string) {}
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

   public agregarCurso(curso: Curso): void {
    this.cursos.push(curso);
  }
}

class EscuelaDigital extends Escuela {
  constructor(id: number, nombre: string, private _paginaWeb: string) {
    super(id, nombre); //reusar el constructor de la superclase
  }

  get paginaWeb() {
    return this._paginaWeb;
  }
  set paginaWeb(paginaWeb: string) {
    this._paginaWeb = paginaWeb;
  }
}

// const miEscuela = new Escuela(1,'Edteam'); // clase abstracta!
const escuela = new EscuelaDigital(1,'EDteam', 'ed.team');
let cursoJS = new Curso(1, 'JavaScript');
let cursoTS = new Curso(2, "TypeScript");

escuela.agregarCurso(cursoJS);
escuela.agregarCurso(cursoTS);
// Acceder a los atriburos publicos;
// modo lectura
// cursoJS.nombre = 'JavaScript desde Cero'; //Asignación: SET
console.log('nombre cursoJS', cursoJS.nombre); //Leyendo estado; GET
// cursoJS.setNombre('JavaScript desde Cero'); 
// cursoJS.id = 20; // asignacion: set
console.log('escuela', escuela);
console.log('escuela.nombre', escuela.nombre); //leyendo estado: GET
console.log('escuela.paginaWeb', escuela.paginaWeb);

console.log('Mis cursos', Curso.cursosDisponibles);
console.log("CursoJS", Curso.getInfo(cursoJS));
