import express, {Response, Request} from 'express';
export const recipientsRouter = express.Router()
const db = require("../../database/queries");
const { hash, salt } = require("../../bc");

declare module "express" { 
    export interface Request {
        csrfToken: () => void;
        session: {userId: string | null};
    }
  }

recipientsRouter.post('/register', async (req: Request, res: Response) => {
    const {values: {firstName, lastName, password, email, city,govIssuedNumber}} = req.body;

    if(!password) return new Error();

    try {
        const hashPw = await hash(password, salt);
        const newRecipient = await db.registerRecipient(firstName, lastName, hashPw, email, city,govIssuedNumber);

        const newRecipientId = newRecipient.rows[0].id;
        req.session.userId = newRecipientId

        return res.json(true)

    } catch(error){
        return res.json(error)
    }
})

recipientsRouter.post('/order/new', async (req: Request, res: Response) => {
    const {deviceType, collectionMethod, paymentMethod} = req.body;

    try {
        const recipientId = req.session.userId;
        const status = "Order in Progress"
        await db.orderDevice(recipientId, deviceType, collectionMethod, paymentMethod, status)
        return res.json(true)
    } catch(error){
        return res.json(error)
    }
})

