import { RequestHandler } from 'express';
import 'reflect-metadata';
import { Methods } from './Methods';
import { Keys } from './Keys';

// esta infertaz se usa para validar que los decoradores solo se puedan usar en funciones de tipo RequestHandler.
interface RouteHandlerDescriptor extends PropertyDescriptor {

    value?: RequestHandler;
}

function routetBinder(method: string) { // mapea de forma dinamica el tipo de request que entra por los routeHandlers
    // sabiendo es post, get o cualquier otro
    return function get(path: string) {

        return function (target: any, key: string, desc: RouteHandlerDescriptor) {

            Reflect.defineMetadata(Keys.path, path, target, key);
            Reflect.defineMetadata(Keys.method, method, target, key);
        }
    }
}

// aqui los asigno
export const get = routetBinder(Methods.get);
export const post = routetBinder(Methods.post);
export const put = routetBinder(Methods.put);
export const _delete = routetBinder(Methods.delete);
export const patch = routetBinder(Methods.patch);

