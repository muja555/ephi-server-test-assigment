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
        ],
        [4, {
            user_id: 4,
            username: '4',
            password: '4',
            ephi_id: null,
        }],
        [5, {
            user_id: 5,
            username: '2',
            password: '2',
            ephi_id: null,
        }],
        [6, {
            user_id: 6,
            username: '3',
            password: '3',
            ephi_id: null,
        }],
        [7, {
            user_id: 7,
            username: '4',
            password: '4',
            ephi_id: null,
        }],
        [8, {
            user_id: 7,
            username: '5',
            password: '5',
            ephi_id: null,
        }],
    ]);

export default UsersTable;

