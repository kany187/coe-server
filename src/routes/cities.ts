import { Router } from 'express';

import { getAllCities, getAllCitiesByCountry, getAllCitiesByState, postCity,  } from '../handlers/city';

const router = Router();

router.get('/cities', getAllCities)
router.get('/cities', getAllCitiesByState)
router.get('/cities', getAllCitiesByCountry)

router.get('/cities/:id', )
router.put('/cities/:id', )
router.post('/cities', postCity)
router.delete('/cities/:id', )

export default router;