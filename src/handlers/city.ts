import prisma from '../startup/db';

export const getAllCities = async (req, res) => {
    const cities = await prisma.city.findMany({});

    res.json({data: cities})
}

export const getAllCitiesByState = async (req, res) => {

    const cities = await prisma.city.findMany({
        where: {
            stateId: req.body.stateId
        }
    })

    res.json({data: cities})
}

export const getAllCitiesByCountry = async (req, res) => {

    const cities = await prisma.city.findMany({
        where: {
            stateId: req.body.stateId
        }
    })

    res.json({data: cities})
}

export const postCity = async (req, res) => {

    const cities = await prisma.city.create({
        data: {
            name: req.body.name,
            stateId: req.body.stateId,
            countryId: req.body.countryId
        }
    });

    res.json({data: cities})
} 