import express from 'express';
import employeeRouter from './employee.routes.js';

const router = express.Router();

router.use('/employee', employeeRouter)

export default router;