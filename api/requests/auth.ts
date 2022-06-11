import express, {Response, Request} from 'express';
export const authRouter = express.Router()


//test request 
authRouter.get('/register', (req: Request, res: Response) => {
    console.log('req.body', req.body);

    return res.json("test");
})

