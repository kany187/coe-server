import prisma from '../startup/db';
import  cloudinary from '../utils/cloudinary';


// admin get all listing --
export const getAllListings = async (req, res) => {
    const listing = await prisma.agentListing.findMany({
        include: { imgSrc: true, propertyLocation: true}
    })

    res.json({data: listing})
}

// display only approved listing to clients --
export const getAllApprovedListings = async (req, res) => {
    const listing = await prisma.agentListing.findMany({
        where: {
            listingStatus: {
                desc: 'APPROVED'
            },
        },
        include: { imgSrc: true, propertyLocation: true}
    })

    res.json({data: listing})
}

// get listingById --
export const getListingById = async (req, res) => {

    const id = parseInt(req.params.id);

    const listing = await prisma.agentListing.findFirst({
        where: {
            id,
        }, include: { imgSrc: true}
    })

    res.json({data: listing})
}

// get all listings by agent
export const getAllListingsByAgent = async (req, res) => {

    // const myListings = await prisma.user.findUnique({
    //     where: {
    //         id: req.user.id
    //     }, 
    //     include: {
    //         assignedAgentListing: true
    //     }
    // })

    const listings = await prisma.agentListing.findMany({
        where: {
            assignedToUserId: req.user.id
        }, include: { imgSrc: true, propertyLocation: true}
    })

    res.json({ data: listings})
}


export const updateListing = async (req, res) => {

    const updated = await prisma.agentListing.update({
        where: {
            id: parseInt(req.params.id),
            assignedToUserId: req.user.id
        },

        data: {
            price: req.body.price,
          bed: req.body.bed,
          bath: req.body.bath,
          propertySize: req.body.propertySize,
          assignedToUser: req.body.assignedToUser,
          assignedToUserEmail: req.body.assignedToUserEmail,
          assignedToUserPhone: req.body.assignedToUserPhone,
          assignedToUserName: req.body.assignedToUserName,
        }
    })

    res.json({data: updated})
}

export const deleteListing = async (req, res) => {

    const listing = await prisma.agentListing.findUnique({
        where: { id: parseInt(req.params.id) },
        include: { imgSrc: true}
    })

    if(!listing) return res.status(404).send('Listing not found!');

    if(listing.imgSrc) 
        listing.imgSrc.map((image) => cloudinary.del(image.src))
    
    await prisma.agentListing.delete({
            where: {
                id: parseInt(req.params.id),
                //assignedToUserId: req.user.id
            }
    })

    await Promise.all(
        listing.imgSrc.map((image) =>
          prisma.image.delete({ where: { id: image.id } })
        )
      );

    res.json({data: listing})
}