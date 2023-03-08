import userRoutes from './user/route.js'
import ephiRoutes from './ephi/route.js'
import express from 'express'
const router = express.Router();

router.use('/users', userRoutes);
router.use('/ephi', ephiRoutes);

export default router
