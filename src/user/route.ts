import express, {Request, Response} from 'express'
import {RequestLogin, RequestUserUpdate} from "./types.js";
import {UserController} from "./controller.js";
import {Override} from "../common.type.js";
const router = express.Router();

const userController = new UserController();

router.post('/login', async (req: Override<Request, {body: RequestLogin}>, res: Response, next) => {
    try {
        const result = await userController.login(req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
});

router.put('/:user_id/ephi', async (req: Override<Request, {body: RequestUserUpdate}>, res: Response, next) => {
    try {
        const user = await userController.updateEphiId(+req.params.user_id, req.body);
        res.json(user);
    } catch (error) {
        next(error);
    }
});

export default router