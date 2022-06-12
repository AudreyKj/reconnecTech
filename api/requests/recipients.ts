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