import {IUser} from "./types.js";

const UsersTable = new Map<number, IUser>(
    [
        [1, {
                user_id: 1,
                username: 'test',
                password: '123456',
                ephi_id: null,
            }
        ]
    ]);

export default UsersTable;

