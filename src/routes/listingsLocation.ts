import { Router } from 'express';

import { createListingLocation } from '../handlers/listingLocation';

const router = Router();

router.get('/location', )
router.get('/location/:id', )
router.put('/location/:id', )
router.post('/location', createListingLocation)
router.delete('/location/:id',)

export default router;