import 'reflect-metadata';
import { Keys } from './Keys';


export function bodyValidador(...keys: string[]) { // no se sabe las propiedades que recibe el body
    /*
    recibe los argumentos como n cantidad de parametros de entrada en la funcion
    */

    return function (target: any, key: string, desc: PropertyDescriptor) {

        Reflect.defineMetadata(Keys.validator, keys, target, key);
    }
}