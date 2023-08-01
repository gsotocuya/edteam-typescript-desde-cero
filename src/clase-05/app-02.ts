// usar una libreria externa JavaSCript: lodash
//package.json
// npm init -y
// npm  install lodash --save
import {random} from 'lodash';

function numberAleatorio(a:number, b:number){
    return random(a,b);
}

console.log('numberoAleatorio(1,10)', numberAleatorio(1,10));
console.log("random(1,100)", random(1, 100));
console.log("random(50,80)", random(50, 80));


