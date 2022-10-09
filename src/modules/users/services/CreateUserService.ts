import {hash} from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import UserDTO from '../dtos/UserDTO';

import { User } from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
export default class CreateUserService{
    
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository
        ) {}

    public async execute(user: UserDTO): Promise<User>{
        const checkUserExists = await this.userRepository.findByEmail(user.email);

        if (checkUserExists)
            throw new Error('Email already in use');
        
        const userCreated = this.userRepository.create({
            name: user.name,
            email: user.email,
            cpf: user.cpf
        });

        return userCreated;
    }
}