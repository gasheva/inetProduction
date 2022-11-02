import {User} from '@/interfaces/user';


export interface UsersHeader {
    header: string;
}

export interface UsersDivider {
    divider: boolean;
    inset: boolean;
}

export type Users = (UsersHeader | UsersDivider | User)[]