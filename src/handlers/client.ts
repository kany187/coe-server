import prisma from '../startup/db';

// admin --
export const getAllClients = async (req, res) => {
    const clients = await prisma.client.findMany({});

    res.json({data: clients})
}

export const createClients = async (req, res) => {
    const clients = await prisma.client.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            message: req.body.message,
            listing: {
                connect: {
                    id: req.body.listingId
                }
            }
        }
    });

    res.json({data: clients})
}