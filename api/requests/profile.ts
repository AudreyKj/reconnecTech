import express, {Response, Request} from 'express';
export const profileRouter = express.Router()
const db = require("../../database/queries");

declare module "express" { 
    export interface Request {
        csrfToken: () => void;
        session: {userId: string | null};
    }
  }


  ///profile/donor
 profileRouter.get('/donor', async (req: Request, res: Response) => {

    const donor_id = req.session.userId;

    try {
        const {rows} = await db.getDonationsCount(donor_id);

        let totalCount=0;

        rows.forEach(donation => totalCount += parseInt(donation.device_count));

        return res.json({totalDonations: totalCount})

    } catch(error){
        console.log('error', error)
        return res.json(error)
    }
})

profileRouter.get('/recipient', async (req: Request, res: Response) => {
    const recipient_id = req.session.userId;
    try {
        const {rows} = await db.getRecipientOrderInfo(recipient_id);
        return res.json(rows)
    } catch(error){
        console.log('error', error)
        return res.json(error)
    }
})



