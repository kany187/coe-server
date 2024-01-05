import prisma from '../startup/db';

export const createListingLocation = async (req, res) => {
    
    const location = await prisma.propertyLocation.create({
        data: {
            address: req.body.address,
            cityId: req.body.cityId,
            regionId: req.body.stateId,
            countryId: req.body.countryId,
            listingTypeId: req.body.listingTypeId,
            propertyTypeId: req.body.propertyTypeId
        }
    })

    res.json({ data: location})
}