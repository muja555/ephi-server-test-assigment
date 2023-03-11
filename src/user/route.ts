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


// router.get("/login", async (req: Omit<Request,'body'> & { body: RequestLogin }, res: Response) => {
//     const controller = new UserController();
//     const user = await controller.login(req.body);
//
//     if (!user) {
//         return res.status(401).send("Unauthorized");
//     }
//
//     return res.status(200).json(user);
// });


router.put('/:user_id/ephi', async (req: Override<Request, {body: RequestUserUpdate}>, res: Response, next) => {
    try {
        const user = await userController.updateEphiId(+req.params.user_id, req.body);
        res.json(user);
    } catch (error) {
        next(error);
    }
});


//
// router.put("/:user_id", async (req: Omit<Request,'body'> & { body: RequestUserUpdate }, res: Response) => {
//
//     const {
//         ephi_id,
//     } = req.body;
//
//     const ephiId = parseInt(String(ephi_id));
//     if (isNaN(ephiId)) {
//         return res.status(404).send("ephi_id is not a valid number");
//     }
//
//     const userId = parseInt(req.params.user_id);
//
//     const user = await controller.update(userId, ephiId);
//
//     const controller = new UserController();
//
//
//
//     if (!user) {
//         return res.status(401).send("Unauthorized");
//     }
//
//     return res.status(200).json(user);
// });


export default router