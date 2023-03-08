import {IUser} from "./types.js";

const UsersTable = new Map<number, IUser>(
    [
        [1, {
            user_id: 1,
            username: 'test',
            password: '123456',
            ephi_id: null,
        }
        ],
        [2, {
            user_id: 2,
            username: '1',
            password: '1',
            ephi_id: null,
        }],
        [3, {
            user_id: 3,
            username: 't',
            password: '1',
            ephi_id: null,
        }
        ]
    ]);

export default UsersTable;

