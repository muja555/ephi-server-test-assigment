import {IUser} from "./types.js";
import UsersTable from "./table.js";
import {Body, Controller, Path, Post, Put, Route, SuccessResponse, Tags} from "tsoa";
import CustomError from "../custome-error.class";


@Route('/users')
@Tags("User")
export class UserController extends Controller {

    @Post('login')
    @SuccessResponse('200', 'OK')
    public async login(@Body() body: {
        username: string,
        password: string
    }): Promise<IUser> {

        let user;
        for (let _user of UsersTable.values()) {
            if (_user.username === body.username && _user.password === body.password) {
                user = _user;
                break;
            }
        }

        if (!user) {
            throw new CustomError('Unauthorized', 401);
        }

        return user;
    }


    @Put('{user_id}/ephi')
    @SuccessResponse('200', 'OK')
    public async updateEphiId(
        @Path() user_id: number,
        @Body() body: { ephi_id: number }
    ): Promise<IUser> {

        const user = UsersTable.get(user_id);

        if (!user) {
            throw new CustomError(`User with ID ${user_id} not found`, 404);
        }

        user.ephi_id = (+body.ephi_id);

        UsersTable.set(user.user_id, user);

        return user;
    }
}