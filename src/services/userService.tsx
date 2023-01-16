import { IUserList } from "../models/IUserList";

export class UserService {
    private static users: IUserList[] = [
        {
            sno: 'AAA101',
            name: 'Steeven Ayui',
            age: 27,
            designation: 'Sistemas',
            company: `Edarkea's team`
        },
        {
            sno: 'AAA102',
            name: 'Steeven Ayui 1',
            age: 27,
            designation: 'Sistemas',
            company: `Edarkea's team`
        },
        {
            sno: 'AAA103',
            name: 'Steeven Ayui 2',
            age: 27,
            designation: 'Sistemas',
            company: `Edarkea's team`
        }
    ];


    public static getAllUsers(): IUserList[]{
        return this.users;
    }

}