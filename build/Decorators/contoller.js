"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const AppRouter_1 = require("../AppRouter");
const Keys_1 = require("./Keys");
function bodyValidators(keys) {
    return function (req, res, next) {
        if (!req.body)
            return res.status(422).send("Invalid request");
        for (const key of keys) {
            if (!req.body[key]) {
                return res.status(422).send(`Missing property ${key}`);
            }
        }
        next();
    };
}
function controller(prefix) {
    return function (target) {
        const router = AppRouter_1.AppRouter.getInstanceSingleton();
        Object.getOwnPropertyNames(target.prototype).forEach((key) => {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(Keys_1.Keys.path, target.prototype, key);
            const method = Reflect.getMetadata(Keys_1.Keys.method, target.prototype, key);
            const middlewares = Reflect.getMetadata(Keys_1.Keys.middleware, target.prototype, key) || [];
            const requiredBodyProps = Reflect.getMetadata(Keys_1.Keys.validator, target.prototype, key) || [];
            const validator = bodyValidators(requiredBodyProps);
            //asociar la informacion de las rutas y routeHanlders
            if (path) {
                router[method](`${prefix}${path}`, ...middlewares, validator, routeHandler);
            }
        });
    };
}
exports.controller = controller;
