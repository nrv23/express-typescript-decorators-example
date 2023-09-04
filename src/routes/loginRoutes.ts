import { Router, Request, Response, NextFunction } from 'express';

export interface RequestWithBody extends Request {

    body: { // hereda de la interfaz Request y sobre escribe la propiedad body

        [key: string]: string | undefined // indica que no sabe el nombre de la llave pero es de tipo string y su valor puede 
        // ser string o undefined
    }
}

