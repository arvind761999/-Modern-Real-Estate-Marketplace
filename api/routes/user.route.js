import express from 'express';
import { test } from '../controllers/user.controller.js'

// Create a Router 
const router = express.Router();

router.get('/test', test);


export default router;