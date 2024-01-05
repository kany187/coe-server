import prisma from '../startup/db';
import { hashPassword, createJWT, comparePasswords } from '../routes/auth'

export const createNewUser = async (req, res) => {

    const hashedPassword = await hashPassword(req.body.hashedPassword);

    const user = await prisma.user.create({
        data: {
            email: req.body.email,
            hashedPassword
        }
    })

    const token = createJWT(user);
    res.json({token});
}


export const signin = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email
        }
    })

    const passwordsMatch = await comparePasswords(req.body.hashedPassword, user?.hashedPassword);

    if(!passwordsMatch) return  res.status(401).send('Invalid password')
    
    const token = createJWT(user);

    res.json({token})

}

