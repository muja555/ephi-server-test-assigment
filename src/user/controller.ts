import {IUser} from "./types.js";
import UsersTable from "./table.js";
import {Body, Controller, Path, Post, Put, Route, SuccessResponse, Tags} from "tsoa";


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
            throw new Error('Unauthorized');
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
            throw new Error(`User with ID ${user_id} not found`);
        }

        user.ephi_id = (+body.ephi_id);

        UsersTable.set(user.user_id, user);

        return user;
    }
}


//     @Put("/:user_id")
//     public async update(body: { userId: number, ephiId: number }) {
//         const {
//             userId,
//             ephiId,
//         } = body;
//
//         const user = UsersTable.get(userId);
//
//         if (!user) {
//             throw new Error('User not found');
//         }
//
//         const _user = {
//             ...user,
//             ephi_id: ephiId
//         }
//
//         UsersTable.set(user.user_id, _user);
//
//         return _user;
//     }
// }

//
// export function login(req: Omit<Request,'body'> & { body: RequestLogin }, res: Response) {
//     const {
//         username,
//         password
//     } = req.body;
//
//     let user;
//     for (let _user of UsersTable.values()) {
//         if (_user.username === username && _user.password === password) {
//             user = _user;
//             break;
//         }
//     }
//
//     if (user) {
//         res.status(200).json(user);
//     }
//     else {
//         res.status(401).send("Unauthorized");
//     }
// }
//
//
// export function userUpdate(req: Omit<Request,'body'> & { body: RequestUserEphiUpdate }, res: Response) {
//     const {
//         ephi_id,
//     } = req.body;
//
//     const ephiId = parseInt(String(ephi_id));
//
//     if (isNaN(ephiId)) {
//         res.status(404).send("ephi_id is not a valid number");
//         return;
//     }
//
//     const userId = parseInt(req.params.user_id);
//     const user = UsersTable.get(userId);
//
//     if (!user) {
//         res.status(500).send("Not Found");
//         return;
//     }
//
//     const newUser = {
//         ...user,
//         ephi_id: ephiId
//     }
//
//     UsersTable.set(user.user_id, newUser);
//
//     res.status(200).json(newUser);
// }