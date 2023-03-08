import * as controller from './controller.js';

import express from 'express'
const router = express.Router();

router.post('/login', controller.login);
router.put('/:user_id', controller.ephiIdUpdate);

export default router