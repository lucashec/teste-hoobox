import IUserDTO from "../../../dtos/UserDTO";
import IUserRepository from "../../../repositories/IUserRepository";
import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";

export default class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>;

    public constructor(){
        this.ormRepository = getRepository(User);
    }

    public async create(userDTO: IUserDTO): Promise<User>{
        await this.ormRepository.create(userDTO);
        return this.ormRepository.save(userDTO);
    }
    public async findByEmail(email: string): Promise<User | null | undefined> {
        const user = await this.ormRepository.findOne({
            where: {email}
        })
        return user;
    }   
}