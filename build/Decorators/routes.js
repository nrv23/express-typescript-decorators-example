"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports._delete = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
const Methods_1 = require("./Methods");
const Keys_1 = require("./Keys");
function routetBinder(method) {
    // sabiendo es post, get o cualquier otro
    return function get(path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(Keys_1.Keys.path, path, target, key);
            Reflect.defineMetadata(Keys_1.Keys.method, method, target, key);
        };
    };
}
// aqui los asigno
exports.get = routetBinder(Methods_1.Methods.get);
exports.post = routetBinder(Methods_1.Methods.post);
exports.put = routetBinder(Methods_1.Methods.put);
exports._delete = routetBinder(Methods_1.Methods.delete);
exports.patch = routetBinder(Methods_1.Methods.patch);
