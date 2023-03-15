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
    health_plan: number;
}

export interface RequestCreate extends Request, IEphi {

}

export interface RequestUpdate extends Request, IEphi {
    params: {
        ephi_id: number;
    }
}
