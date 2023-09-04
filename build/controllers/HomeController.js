"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const Decorators_1 = require("../Decorators");
const Use_1 = require("../Decorators/Use");
function requireAuth(req, res, next) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        next();
        return;
    }
    res.statusCode = 403;
    res.send("Not permitted");
    return;
}
let HomeController = class HomeController {
    home(req, res) {
        var _a;
        if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
            res.send(`
            <div>
                <div>
                    You are loggedIn
                </div>
                <a href="/auth/logout">Logout</a>
        </div>
            
            `);
        }
        else {
            res.send(`
            <div>
                <div>
                    You are not loggedIn
                </div>
                    <a href="/auth/login">Login</a>
            </div>
        `);
        }
    }
    protected(req, res) {
        res.send("Welcome to protected route, logged in user");
    }
};
__decorate([
    (0, Decorators_1.get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "home", null);
__decorate([
    (0, Decorators_1.get)("/protected"),
    (0, Use_1.Use)(requireAuth),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], HomeController.prototype, "protected", null);
HomeController = __decorate([
    (0, Decorators_1.controller)("")
], HomeController);
