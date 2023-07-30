import {NextApiRequest, NextApiResponse} from "next";

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const action = await prisma.actions.create({
            data: {
                status: req.body.status,
                action: req.body.action,
                message: req.body.message,
                date: new Date(Date.now()).toLocaleDateString(),
                time: new Date(Date.now()).toLocaleTimeString()
            }
        })


        console.log(action)

        res.status(200).json({success: true});
    } else if (req.method === 'GET') {
        const actions = await prisma.actions.findMany({})
        res.status(200).json({actions});
    } else if (req.method === 'DELETE') {
        await prisma.actions.deleteMany({
            where: {
                NOT: [
                    {
                        status: 0
                    }
                ]
            }
        })
        res.status(200).json({success: true});
    }
}