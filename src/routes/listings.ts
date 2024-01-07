import {Router} from 'express';
import { auth } from './auth';

import prisma from '../startup/db';
import multerUpload from '../utils/multer';
import  cloudinary from '../utils/cloudinary';

import { deleteListing, getAllApprovedListings, getAllListings, getAllListingsByAgent, getListingById, updateListing } from '../handlers/listings';

const router = Router();

router.get('/listings', getAllListings)

router.get('/listings/agent', auth, getAllListingsByAgent)

router.get('/listings/approved', getAllApprovedListings)

router.get('/listings/:id', getListingById)

router.put('/listings/:id', updateListing)

router.post('/listings', multerUpload, async(req, res) => {

   try {
    const buffers = req.files.map((f) => f.buffer);

    const result = await cloudinary.upload(buffers);

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
                      id: parseInt(req.body.propertyLocationId )
                    }
                  },
                listedBy: req.body.listedBy,
                listingStatus: {
                    connect: {
                        id: newListingStatus.id
                    }
                  },
                description: req.body.description,
                imgSrc: {
                    create: result.map((src) => ({ src }))
                  },
            },
        });
        
    res.json({data: newListing})
        
    } catch (error) {
        res.status(500).json({error: 'Internal server error'});
    }
})

router.delete('/listings/:id', deleteListing)

export default router

