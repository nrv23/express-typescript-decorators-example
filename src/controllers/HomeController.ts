import { Request, Response, NextFunction } from 'express';
import { controller, get } from '../Decorators';
import { Use } from '../Decorators/Use';


function requireAuth(req: Request, res: Response, next: NextFunction) {

    if (req.session?.loggedIn) {
        next();
        return;
    }

    res.statusCode = 403;
    res.send("Not permitted");
    return;
}

@controller("")
class HomeController {

    @get("/")
    home(req: Request, res: Response) {

        if (req.session?.loggedIn) {
            res.send(`
            <div>
                <div>
                    You are loggedIn
                </div>
                <a href="/auth/logout">Logout</a>
        </div>
            
            `)
        } else {
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

    @get("/protected")
    @Use(requireAuth)
    protected(req: Request, res: Response) {
        res.send("Welcome to protected route, logged in user");
    }
}