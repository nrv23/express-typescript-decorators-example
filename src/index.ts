import cookieSession from 'cookie-session';
import express from 'express';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/HomeController';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    cookieSession(
        {
            keys: ["asdadasd"]
        }
    )
)

app.use(AppRouter.getInstanceSingleton());
app.listen(3000, () => {
    console.log("Servidor escuchando peticiones en puerto 3000")
})


