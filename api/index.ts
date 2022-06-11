import express, {Response, Request, NextFunction} from 'express';
import {Server} from 'http';
import compression from 'compression';
import cookieSession from 'cookie-session';
import cors from 'cors';
import path from 'path';
import {authRouter} from './requests/auth';

const app = express();
const server = new Server(app);


declare module "express" { 
    export interface Request {
        csrfToken: () => void;
        session: {userId: string | null};
    }
  }

const clientPath = path.join(__dirname, "../client/public/index.html")
console.log('clientPath', clientPath);

app.use(compression());

app.use(express.static('dist'));

app.use(cors());

app.use(express.json());

app.use((req:Request, res:Response, next:NextFunction) => {
    next();
});


app.use(
    cookieSession({
        secret: `The secret is used to generate the second cookie used to verify
        the integrity of the first cookie`,
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(require("csurf")());

app.use((req:Request, res:Response, next:NextFunction) => {
    res.set("x-frame-options", "deny");
    res.cookie("csrftoken", req.csrfToken());
    next();
});


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
  }

app.get('/', (req:Request, res: Response) => {
    res.sendFile(clientPath);
});

//ROUTES
app.use('/users/auth', authRouter);

//HOMEPAGE TEST
app.get("/", function (req:Request, res:Response) {
    res.sendFile(clientPath);
});

//redirect to default page
app.use((req:Request, res:Response) => {
    res.redirect("/")
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });    


server.listen(process.env.PORT || 5000, () => console.log('server on'));