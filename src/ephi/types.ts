export type IEphi = {
    ephi_id: number;
    user_id: number;
    first_name: string;
    last_name: string;
    address: string;
    birthday: Date;
    phone: string;
    email: string;
    ssn: number; // Social Security Number
    mrn: number; // Medical Record Number
}


export interface RequestPost extends Request, IEphi {

}

export interface RequestPut extends Request, IEphi {
    params: {
        ephi_id: number;
    }
}