import express, { Response, Request } from 'express';
export const authRouter = express.Router()
const db = require("../../database/queries");
const { compare } = require("../../bc");

declare module "express" {
    export interface Request {
        csrfToken: () => void;
        session: { userId: string | null };
    }
}


authRouter.post("/login", async (req: Request, res: Response) => {
    const {
        values: { email, password }
    } = req.body;

<<<<<<< HEAD
=======
    console.log('email', email);
    console.log('password body', password);

>>>>>>> master
    try {
        const isUserRegisteredRecipient = await db.verifyUserRecipients(email);
        const isUserRegisteredDonor = await db.verifyUserDonors(email);

        let passwordDB;
        let userType;

<<<<<<< HEAD
=======
        console.log('isUserRegisteredRecipient', isUserRegisteredRecipient);
        console.log('isUserRegisteredDonor', isUserRegisteredDonor)


>>>>>>> master
        if (isUserRegisteredRecipient && isUserRegisteredRecipient.rows[0]?.account_password) {
            passwordDB = isUserRegisteredRecipient.rows[0]?.account_password
            userType = 'recipient'
        }


        if (isUserRegisteredDonor && isUserRegisteredDonor.rows[0]?.account_password) {
            passwordDB = isUserRegisteredDonor.rows[0]?.account_password
            const companyName = isUserRegisteredDonor.rows[0]?.company_name
            companyName ? userType = 'donor-business' : 'donor-individual'
        }

        if ((!isUserRegisteredRecipient || isUserRegisteredRecipient?.rows?.length === 0) && (!isUserRegisteredDonor || isUserRegisteredDonor?.rows?.length === 0)) {
            return res.json({ error: "user not found" });
        }

        const passwordMatched = await compare(password, passwordDB);

        if (passwordMatched) {
            req.session.userId = isUserRegisteredRecipient.rows[0].id;
        } else {
            console.log('password doesnt match')
            return res.json({ error: 'password doesnt match' });
        }

        return res.json({userType: userType});

    } catch (error) {
        console.log('error - login', error);
        return res.json({ error: true });
    }
});