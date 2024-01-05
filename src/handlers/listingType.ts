import prisma from '../startup/db';

export const postListingType = async (req, res) => {
    
    const status = await prisma.listingType.create({
        data: {
            desc: req.body.desc
        }
    })

    res.json({data: status})
}

export const getListingType = async (req, res) => {
    
    const status = await prisma.listingType.findMany({})

    res.json({data: status})
}