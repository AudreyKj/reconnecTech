import express, {Response, Request} from 'express';
export const recipientsRouter = express.Router()
const db = require("../../database/queries");
const { hash, salt, compare } = require("../../bc");

declare module "express" { 
    export interface Request {
        csrfToken: () => void;
        session: {userId: string | null};
    }
  }

recipientsRouter.post('/register', async (req: Request, res: Response) => {
    const {first_name, last_name, email, street_address, country_location, city_location, account_password, voucher, gov_issued_number} = req.body;

    try {
        const hashPw = await hash(account_password, salt);
        const newRecipient = await db.registerRecipient(first_name, last_name, email, street_address, country_location, city_location, hashPw, voucher, gov_issued_number);

        const newRecipientId = newRecipient.rows[0].id;
        req.session.userId = newRecipientId

        return res.json(true)

    } catch(error){
        console.log('error', error)
        return res.json(error)
    }
})

recipientsRouter.post("/login", async (req:Request, res:Response) => {
    const {
        values: { email, password }
    } = req.body;

    try {
        const isUserRegistered = await db.verifyUser(email);
        const passwordDB = isUserRegistered && isUserRegistered.rows[0]?.account_password

        if (!isUserRegistered || isUserRegistered.rows.length === 0) {
            console.log('not found')
            return res.json({ error: "user not found" });
        }

        const passwordMatched = await compare(password, passwordDB);

        if (passwordMatched) {
            req.session.userId = isUserRegistered.rows[0].id;
        } else {
            console.log('password doesnt match')
            return res.json({ error: 'password doesnt match' });
        }
        
        return res.json(true);

    } catch (error) {
        console.log('error - login', error);
        return res.json({ error: true });
    }
});

recipientsRouter.post('/order/new', async (req: Request, res: Response) => {
    const {device_type} = req.body;

    try {
        const recipient_id = req.session.userId;
        const status = "Order in Progress"
        await db.orderDevice(recipient_id, device_type, status)
        return res.json(true)
    } catch(error){
        console.log('error', error)
        return res.json(error)
    }
})