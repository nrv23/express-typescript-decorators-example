// se va usar un singleton para tener solamente un router para toda la aplicacion
import express from 'express';

export class AppRouter {

    private static instance: express.Router;

    static getInstanceSingleton(): express.Router {
        if (!AppRouter.instance) { // si la instancia no existe la crea. Sino reutiliza la misma instancia
            AppRouter.instance = express.Router();
        }

        return AppRouter.instance;
    }

}