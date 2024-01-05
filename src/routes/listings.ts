import {Router} from 'express';
import { auth } from './auth';
import { deleteListing, getAllApprovedListings, getAllListings, getAllListingsByAgent, getListingById, postListing, updateListing } from '../handlers/listings';

const router = Router();

router.get('/listings', getAllListings)

router.get('/listings/agent', auth, getAllListingsByAgent)

router.get('/listings/approved', getAllApprovedListings)

router.get('/listings/:id', getListingById)

router.put('/listings/:id', updateListing)

router.post('/listings', postListing)

router.delete('/listings/:id', deleteListing)

export default router