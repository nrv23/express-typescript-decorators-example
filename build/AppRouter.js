"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
// se va usar un singleton para tener solamente un router para toda la aplicacion
const express_1 = __importDefault(require("express"));
class AppRouter {
    static getInstanceSingleton() {
        if (!AppRouter.instance) { // si la instancia no existe la crea. Sino reutiliza la misma instancia
            AppRouter.instance = express_1.default.Router();
        }
        return AppRouter.instance;
    }
}
exports.AppRouter = AppRouter;
