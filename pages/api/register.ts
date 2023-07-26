import {NextApiRequest, NextApiResponse} from "next";

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const user = await prisma.users.create({
            data: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
        })


        console.log(user)

        res.status(200).json({success: true});
    } else {
        res.status(200).json({success: false});
    }
}