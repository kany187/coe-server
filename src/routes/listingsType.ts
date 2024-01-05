import { Router } from 'express';

import { getListingType, postListingType } from '../handlers/listingType';

const router = Router();

router.get('/listingstatus', getListingType)
router.get('/listingstatus/:id', () => {})
router.put('/listingstatus/:id', () => {})
router.post('/listingstatus', postListingType)
router.delete('/listingstatus/:id', () => {})

export default router;