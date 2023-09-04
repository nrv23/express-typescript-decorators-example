"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidador = void 0;
require("reflect-metadata");
const Keys_1 = require("./Keys");
function bodyValidador(...keys) {
    /*
    recibe los argumentos como n cantidad de parametros de entrada en la funcion
    */
    return function (target, key, desc) {
        Reflect.defineMetadata(Keys_1.Keys.validator, keys, target, key);
    };
}
exports.bodyValidador = bodyValidador;
