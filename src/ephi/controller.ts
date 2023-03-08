import {Request, Response} from 'express';
import EphiTable from "./table.js";
import {IEphi, RequestPost, RequestPut} from "./types.js";
import {findMaxKey} from "../utils.js";

export function get(req: Request, res: Response) {

    const ephi_id = parseInt(req.params['ephi_id']);
    const ephi = EphiTable.get(ephi_id);

    if (ephi) {
        res.status(200).json(ephi);
    }
    else {
        res.status(404).send("Not Found");
    }
}


export function post(req: Omit<Request,'body'> & { body: RequestPost }, res: Response) {

    const ephi = req.body;

    const newId = findMaxKey(EphiTable) + 1;
    const newEphi: IEphi = {...ephi, ephi_id: newId};

    EphiTable.set(newId, newEphi);

    res.status(200).json(newEphi);
}


export function put(req: Omit<Request,'body'> & { body: RequestPut }, res: Response) {

    const ephi = EphiTable.get(parseInt(req.params.ephi_id));

    if (!ephi) {
        res.status(404).send("Not Found");
        return;
    }

    const newEphi: IEphi = {...ephi, ...req.body};
    EphiTable.set(ephi.ephi_id, newEphi);

    res.status(200).json(ephi);
}

