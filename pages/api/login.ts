import {NextApiRequest, NextApiResponse} from "next";

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const user = await prisma.users.findUnique({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            })
            console.log(user)
            if (user) {
                res.status(200).json({success: true, user});
            } else {
                res.status(200).json({success: false, error: 'Invalid user or password'});
            }
        } catch (error) {
            res.status(200).json(error);
        }
    } else {
        res.status(200).json({success: true});
    }
}