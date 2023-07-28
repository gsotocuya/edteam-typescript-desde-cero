let cursos = ['TypeScript desde cero v2.0', 'Angular desde cero'];
console.log('cursos',cursos);

const inscritos = 20;

function suma(a:number, b:number){
    return a + b;
}

const resultado = suma(2,5);
console.log('2 + 3 = ', resultado);

//templates literals
let codigo = `
    <button>hola</buttom>
    <div></div>
`;

console.log('codigo', codigo);

let curso = 'TypeScript';
let saludo2 = `bienvenidos al curso de ${curso}`;
console.log('saludo', saludo2);
