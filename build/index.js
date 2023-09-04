"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_session_1 = __importDefault(require("cookie-session"));
const express_1 = __importDefault(require("express"));
const AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
require("./controllers/HomeController");
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cookie_session_1.default)({
    keys: ["asdadasd"]
}));
app.use(AppRouter_1.AppRouter.getInstanceSingleton());
app.listen(3000, () => {
    console.log("Servidor escuchando peticiones en puerto 3000");
});
