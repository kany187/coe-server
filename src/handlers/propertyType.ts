import prisma from '../startup/db';

export const postPropertyType = async (req, res) => {
    
    const status = await prisma.propType.create({
        data: {
            desc: req.body.desc
        }
    })

    res.json({data: status})
}

export const getPropertyType = async (req, res) => {
    
    const status = await prisma.propType.findMany({})

    res.json({data: status})
}