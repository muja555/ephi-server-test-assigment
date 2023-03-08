import * as controller from './controller.js';

import express from 'express'
const router = express.Router();

router.get('/:ephi_id', controller.get);
router.post('/', controller.post);
router.put('/:ephi_id', controller.put);

export default router