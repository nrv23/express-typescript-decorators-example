import 'reflect-metadata';
import { AppRouter } from '../AppRouter';
import { Methods } from './Methods';
import { Keys } from './Keys';
import { bodyValidador } from './BodyValidador';
import { RequestHandler, Request, NextFunction, Response } from 'express';

function bodyValidators(keys: string): RequestHandler {
    return function (req: Request, res: Response, next: NextFunction) {
        if (!req.body) return res.status(422).send("Invalid request");

        for (const key of keys) {
            if (!req.body[key]) {
                return res.status(422).send(`Missing property ${key}`);
            }
        }

        next();
    }

}

export function controller(prefix: string) { // toma un prefix que va ser la ruta base para cada controlador
    return function (target: Function) {
        const router = AppRouter.getInstanceSingleton();
        Object.getOwnPropertyNames(target.prototype).forEach((key) => {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(Keys.path, target.prototype, key);
            const method: Methods = Reflect.getMetadata(Keys.method, target.prototype, key);
            const middlewares = Reflect.getMetadata(Keys.middleware, target.prototype, key) || [];
            const requiredBodyProps = Reflect.getMetadata(Keys.validator, target.prototype, key) || [];
            const validator = bodyValidators(requiredBodyProps);
            //asociar la informacion de las rutas y routeHanlders
            if (path) {
                router[method](`${prefix}${path}`, ...middlewares, validator, routeHandler);
            }
        });
    };
}

