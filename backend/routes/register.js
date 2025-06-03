import express from 'express';
import { sendRegister } from '../controller/register.js';

const router = express.Router();
router.post('/send', sendRegister);

export default router;