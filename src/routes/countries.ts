import { Router } from 'express';

import { createCountry, deleteCountry, getAllCountries, getCountryById, updateCountry } from '../handlers/country';

const router = Router();

router.get('/country', getAllCountries)
router.get('/country/:id', getCountryById)
router.put('/country/:id', updateCountry)
router.post('/country', createCountry)
router.delete('/country/:id', deleteCountry)

export default router;