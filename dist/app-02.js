"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// usar una libreria externa JavaSCript: lodash
//package.json
// npm init -y
// npm  install lodash --save
const lodash_1 = require("lodash");
function numberAleatorio(a, b) {
    return (0, lodash_1.random)(a, b);
}
console.log('numberoAleatorio(1,10)', numberAleatorio(1, 10));
console.log("random(1,100)", (0, lodash_1.random)(1, 100));
console.log("random(50,80)", (0, lodash_1.random)(50, 80));
