import EphiTable from "./table.js";
import {IEphi} from "./types.js";
import {findMaxKey} from "../utils.js";
import {Body, Controller, Get, Path, Post, Put, Route, SuccessResponse, Tags} from "tsoa";


@Route('/ephi')
@Tags("Ephi")
export class EphiController extends Controller {


    @Get('/:ephi_id')
    public async get(@Path() ephi_id: number): Promise<IEphi> {
        const ephi = EphiTable.get(ephi_id);

        if (!ephi) {
            throw new Error(`Ephi with ID ${ephi_id} not found`);
        }

        return ephi;
    }

    @Post('/')
    @SuccessResponse('200', 'OK')
    public async create(
        @Body() body: IEphi
    ): Promise<IEphi> {

        const newId = findMaxKey(EphiTable) + 1;
        const newEphi: IEphi = {...body, ephi_id: newId};
        EphiTable.set(newId, newEphi);
        return newEphi;
    }


    @Put('/{ephi_id}')
    @SuccessResponse('200', 'OK')
    public async updateEphi(
        @Path() ephi_id: number,
        @Body() body: IEphi
    ): Promise<IEphi> {

        const ephi = EphiTable.get(ephi_id);

        if (!ephi) {
            throw new Error(`Ephi with ID ${ephi_id} not found`);
        }

        const newEphi: IEphi = {...ephi, ...body};
        EphiTable.set(ephi.ephi_id, newEphi);
        return newEphi;
    }

}

