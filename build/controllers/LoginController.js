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
function Logger(req, res, next) {
    console.log("Request was made");
    next();
}
let LoginController = class LoginController {
    //@Use(Logger) // recibe como parametro un requestHandler por lo que debe ser un middlware con los 3 parametros req,res,next
    getLogin(req, res) {
        res.send(`
            
                <div>
                    <form method="POST">
                        <div>
                            <label for="">Email</label>
                            <input type="email" name="email" id="email">
                            
                        </div>
                        <div>
                            <label for="">Password</label>
                            <input type="password" name="password" id="password">                       
                        </div>
        
                        <input type="submit" value="submit">
                    </form>
                </div>
        
        `);
    }
    postLogin(req, res) {
        const { body: { email, password } } = req;
        if (email === 'test@hotmail.com' && password === '1234') {
            req.session = { loggedIn: true };
            res.redirect("/");
        }
        else {
            res.send("Invalid email/password");
        }
    }
    logout(req, res) {
        req.session = undefined;
        res.redirect("/auth/login");
    }
};
__decorate([
    (0, Decorators_1.get)("/login")
    //@Use(Logger) // recibe como parametro un requestHandler por lo que debe ser un middlware con los 3 parametros req,res,next
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getLogin", null);
__decorate([
    (0, Decorators_1.post)("/login"),
    (0, Decorators_1.bodyValidador)("email", "password"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "postLogin", null);
__decorate([
    (0, Decorators_1.get)("/logout"),
    (0, Use_1.Use)(Logger),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "logout", null);
LoginController = __decorate([
    (0, Decorators_1.controller)("/auth")
], LoginController);
