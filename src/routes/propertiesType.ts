import { Router } from 'express';
import { getPropertyType, postPropertyType } from '../handlers/propertyType';

const router = Router();

router.get('/proptype', getPropertyType)
router.get('/proptype/:id', () => {})
router.put('/proptype/:id', () => {})
router.post('/proptype', postPropertyType)
router.delete('/proptype/:id', () => {})

export default router;