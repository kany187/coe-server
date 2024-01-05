import { Router } from 'express';

import { getAllState, getAllStateByCountry, postState } from '../handlers/state';

const router = Router();

router.get('/states', getAllState)
router.get('/states', getAllStateByCountry)
router.get('/states/:id', )
router.put('/states/:id', )
router.post('/states', postState)
router.delete('/states/:id', )

export default router;