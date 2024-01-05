import prisma from '../startup/db';

export const getAllState = async (req, res) => {
    const cities = await prisma.state.findMany({});

    res.json({data: cities})
}


export const getAllStateByCountry = async (req, res) => {

    const cities = await prisma.state.findMany({
        where: {
            countryId: req.body.countryId
        }
    })

    res.json({data: cities})
}

export const postState = async (req, res) => {

    const cities = await prisma.state.create({
        data: {
            name: req.body.name,
            countryId: req.body.countryId
        }
    });

    res.json({data: cities})
} 