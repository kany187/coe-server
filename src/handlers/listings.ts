import prisma from '../startup/db';


// admin get all listing --
export const getAllListings = async (req, res) => {
    const listing = await prisma.agentListing.findMany({})

    res.json({data: listing})
}

// display only approved listing to clients --
export const getAllApprovedListings = async (req, res) => {
    const listing = await prisma.agentListing.findMany({
        where: {
            listingStatus: {
                desc: 'APPROVED'
            }
        }
    })

    res.json({data: listing})
}

// get listingById --
export const getListingById = async (req, res) => {

    const id = parseInt(req.params.id);

    const listing = await prisma.agentListing.findFirst({
        where: {
            id,
        }
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
        }
    })

    res.json({ data: listings})
}

// post listing --
export const postListing = async (req , res) => {

    try {
        const newListingStatus = await prisma.agentListingStatus.create({
            data: {
                desc: req.body.listingStatus
            }
          })
    
          const newListing = await prisma.agentListing.create({
       
            data: {
              price: req.body.price,
              bed: req.body.bed,
              bath: req.body.bath,
              propertySize: req.body.propertySize,
              //assignedToUserId: req.user.id,
              assignedToUser: {
                connect: {
                    id: req.body.assignedToUserId
                  }
              },
              assignedToUserEmail: req.body.assignedToUserEmail,
              assignedToUserPhone: req.body.assignedToUserPhone,
              assignedToUserName: req.body.assignedToUserName,
              propertyLocation: {
                connect: {
                  id: req.body.propertyLocationId 
                }
              },
              listedBy: req.body.listedBy,
              listingStatus: {
                connect: {
                    id: newListingStatus.id
                }
              },
              description: req.body.description,
              
            //   imgSrc: {
            //     create: req.body.imgSrc.map((src: string) => ({ src })),
            //   },
            },
          });
    
          res.json({data: newListing})
    } catch (error) {
        res.status(500).json({error: 'Internal server error'})
    }
}

export const updateListing = async (req, res) => {

    const updated = await prisma.agentListing.update({
        where: {
            id: parseInt(req.params.id),
            //assignedToUserId: req.user.id
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

    const deleted = await prisma.agentListing.delete({
        where: {
            id: parseInt(req.params.id),
            //assignedToUserId: req.user.id
        }
    })

    res.json({data: deleted})
}