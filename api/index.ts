import express, { Response, Request, NextFunction } from 'express';
import cookieSession from "cookie-session";
import http from 'http'; 
import compression from 'compression';
import cors from 'cors';
import path from 'path';
import { donationsRouter } from './requests/donations';
import { recipientsRouter } from './requests/recipients';
import { profileRouter } from './requests/profile';
import { authRouter } from './requests/auth';

declare module "express" {
    export interface Request {
        csrfToken: () => void;
        session: { userId: string | null };
    }
}

const app = express();
app.disable("x-powered-by");

const server = new http.Server(app);
const clientPath = path.join(__dirname, "../client/public/index.html");

app.use(compression());

app.use(express.static('dist'));

app.use(cors());

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    next();
});

app.use(
    cookieSession({
        secret: `The secret is used to generate the second cookie which is used 
        to verify the integrity of the first cookie`,
        cookie: {
            secure: true,
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 14,
        }
    })
);

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use((req: Request, res: Response, next: NextFunction) => {
    next();
});


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

//ROUTES
app.use('/donations', donationsRouter);
app.use('/recipients', recipientsRouter);
app.use('/profile', profileRouter);
app.use('/auth', authRouter);

app.get('/', (req:Request, res: Response) => {
    res.sendFile(clientPath);
});

server.listen(process.env.PORT || 5000, () => console.log('server on'));