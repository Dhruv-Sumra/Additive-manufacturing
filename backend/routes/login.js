import express from 'express'
import { sendLogin } from '../controller/login.js'

const router = express.Router()
router.post('/send' , sendLogin)

export default router