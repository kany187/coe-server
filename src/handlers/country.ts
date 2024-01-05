import prisma from '../startup/db';

export const getAllCountries = async (req, res) => {
    const countries = await prisma.countries.findMany({});

    res.json({data: countries})
}

export const getCountryById = async (req, res) => {
    const countries = await prisma.countries.findUnique({
        where: {
            id: req.params.id
        }
    });

    res.json({data: countries})
}

export const updateCountry = async (req, res) => {

    const countries = await prisma.countries.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            capital: req.body.capital
        }
    });

    res.json({data: countries})
} 

export const createCountry = async (req, res) => {

    const countries = await prisma.countries.create({
        data: {
            name: req.body.name,
            capital: req.body.capital
        }
    });

    res.json({data: countries})
} 

export const deleteCountry = async (req, res) => {

    const countries = await prisma.countries.delete({
        where: {
            id: req.params.id
        },
    });

    res.json({data: countries})
} 