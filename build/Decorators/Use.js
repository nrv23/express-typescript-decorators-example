"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Use = void 0;
require("reflect-metadata");
const Keys_1 = require("./Keys");
function Use(middleware) {
    return function (target, key, desc) {
        const middlewares = Reflect.getMetadata(Keys_1.Keys.middleware, target, key) || [];
        middlewares.push(middleware);
        Reflect.defineMetadata(Keys_1.Keys.middleware, [...middlewares, middleware], target, key);
    };
}
exports.Use = Use;
