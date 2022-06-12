import express, {Response, Request} from 'express';
export const donationsRouter = express.Router()
const db = require("../../database/queries");
const { hash, salt } = require("../../bc");

declare module "express" { 
    export interface Request {
        csrfToken: () => void;
        session: {userId: string | null};
    }
  }

donationsRouter.post('/register/donor', async (req: Request, res: Response) => {
    const {firstName, lastName, companyName, city, country, email, password, deviceCondition, deviceCollection, deviceCount, deviceType} = req.body;

    try {
        const hashPw = await hash(password, salt);
        const newDonor = await db.registerDonor(firstName, lastName, hashPw, companyName, city, country, email);

        const newDonorId = newDonor.rows[0].id;
        req.session.userId = newDonor.rows[0].id;

        await db.submitDonation(deviceCondition, deviceCollection, deviceCount, deviceType, newDonorId)

        return res.json(true)

    } catch(error){
        console.log('error', error)
        return res.json(error)
    }
})


donationsRouter.post('/new', async (req: Request, res: Response) => {
    const {device_type, device_count, device_condition, device_collection} = req.body;

    try {
        const newDonorId = req.session.userId

        await db.submitDonation(device_type, device_count, device_condition, device_collection, newDonorId)

        return res.json(true)

    } catch(error){
        console.log('error', error)
        return res.json(error)
    }
})

