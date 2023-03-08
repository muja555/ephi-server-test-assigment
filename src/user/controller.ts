import {Request, Response} from 'express';
import {RequestLogin, RequestUserEphiUpdate} from "./types.js";
import UsersTable from "./table.js";

export function login(req: Omit<Request,'body'> & { body: RequestLogin }, res: Response) {
    const {
        username,
        password
    } = req.body;

    let user;
    for (let _user of UsersTable.values()) {
        if (_user.username === username && _user.password === password) {
            user = _user;
            break;
        }
    }

    if (user) {
        res.status(200).json(user);
    }
    else {
        res.status(401).send("Unauthorized");
    }
}


export function ephiIdUpdate(req: Omit<Request,'body'> & { body: RequestUserEphiUpdate }, res: Response) {
    const {
        ephi_id,
    } = req.body;

    const ephiId = parseInt(String(ephi_id));

    if (isNaN(ephiId)) {
        res.status(404).send("ephi_id is not a valid number");
        return;
    }

    const userId = parseInt(req.params.user_id);
    const user = UsersTable.get(userId);

    if (!user) {
        res.status(500).send("Not Found");
        return;
    }

    const newUser = {
        ...user,
        ephi_id: ephiId
    }

    UsersTable.set(user.user_id, newUser);

    res.status(200).json(newUser);
}