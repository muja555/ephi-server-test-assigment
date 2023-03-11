import {EphiController} from './controller.js';

import express, {Request, Response} from 'express'
import {Override} from "../common.type";
import {RequestCreate, RequestUpdate} from "./types";

const router = express.Router();

const ephiController = new EphiController();

router.get('/:ephi_id', async (req: Request, res: Response, next) => {
    try {
        const result = await ephiController.get(+req.params.ephi_id);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req: Override<Request, {body: RequestCreate}>, res: Response, next) => {
    try {
        const result = await ephiController.create(req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

router.put('/:ephi_id', async (req: Override<Request, {body: RequestUpdate}>, res: Response, next) => {
    try {
        const result = await ephiController.updateEphi(+req.params.ephi_id, req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

export default router