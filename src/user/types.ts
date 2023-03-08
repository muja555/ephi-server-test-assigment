export interface RequestLogin extends Request {
    username: string;
    password: string;
}

export interface RequestUserEphiUpdate extends Request {
    ephi_id: number;
    params: {
        user_id: number;
    }
}

export type IUser = {
    user_id: number;
    username: string;
    password: string;
    ephi_id: number | null;
}