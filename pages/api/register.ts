import {NextApiRequest, NextApiResponse} from "next";

import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            let user;
            const userExist = await prisma.users.findUnique({
                where: {email: req.body.email}
            })

            console.log(userExist)
            if (!userExist) {
                user = await prisma.users.create({
                    data: {
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password
                    }
                })
                console.log(user)
                res.status(201).json({success: true, user});
            } else {
                res.status(201).json({success: false, error: 'User already exists'});
            }
        } catch (error) {
            res.status(405).json(error);
        }

    } else {
        res.status(200).json({success: true});
    }
}