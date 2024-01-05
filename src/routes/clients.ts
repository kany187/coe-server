import { Router } from 'express';
import { createClients, getAllClients } from '../handlers/client';

const router = Router();

router.get('/clients', getAllClients)
router.get('/clients', )
router.get('/clients', )

router.get('/clients/:id', )
router.put('/clients/:id', )
router.post('/clients', createClients)
router.delete('/clients/:id', )

export default router;