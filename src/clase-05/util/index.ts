export {analizarClase, mostrarPropiedades, PI};

function analizarClase(clase: any) {
  console.log("clave:", clase.clave);
}

function mostrarPropiedades(clase: any) {
  for (let prop in clase.prototipe) {
    console.log("prop", prop);
  }
}

const PI = 3.14;
