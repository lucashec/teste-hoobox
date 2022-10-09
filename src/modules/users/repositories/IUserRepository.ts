import IUserDTO from '../dtos/UserDTO';
import {User} from '../infra/typeorm/entities/User';

export default interface IUserRepository{
    findByEmail(email: string): Promise <User | null | undefined>;
    create(data: IUserDTO): Promise<User>;
}