import { RequestHandler } from 'express';
import 'reflect-metadata';
import { Keys } from './Keys';


export function Use(middleware: RequestHandler) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
        const middlewares = Reflect.getMetadata(Keys.middleware, target, key) || [];
        middlewares.push(middleware);
        Reflect.defineMetadata(Keys.middleware, [...middlewares, middleware], target, key);
    }
}