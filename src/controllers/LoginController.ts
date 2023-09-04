import { Request, Response, NextFunction } from 'express';
import { get, controller, post, bodyValidador } from '../Decorators';
import { Use } from '../Decorators/Use';


function Logger(req: Request, res: Response, next: NextFunction) {
    console.log("Request was made");
    next();
}



@controller("/auth")
class LoginController {

    @get("/login")
    //@Use(Logger) // recibe como parametro un requestHandler por lo que debe ser un middlware con los 3 parametros req,res,next
    getLogin(req: Request, res: Response): void {
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

    @post("/login")
    @bodyValidador("email", "password")
    postLogin(req: Request, res: Response): void {

        const { body: {
            email,
            password
        } } = req;

        if (email === 'test@hotmail.com' && password === '1234') {
            req.session = { loggedIn: true };
            res.redirect("/");
        } else {
            res.send("Invalid email/password");
        }
    }

    @get("/logout")
    @Use(Logger)
    logout(req: Request, res: Response) {

        req.session = undefined;
        res.redirect("/auth/login");
    }
}