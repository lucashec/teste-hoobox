import CreateUserService from '../../../../users/services/CreateUserService';
import {Request, Response} from 'express';
import { container } from 'tsyringe';

export class UserController{
    private static INSTANCE : UserController

    static getInstace(): UserController {
        if (!UserController.INSTANCE){
            UserController.INSTANCE = new UserController();
        }
        return UserController.INSTANCE;   
    }

    async create(request: Request, response: Response){
        try{
            const userService = container.resolve(CreateUserService);
            const {
                name,
                email,
                cpf
            } = request.body
            const user =  await userService.execute({
                name,
                email,
                cpf
            })
            return response.status(200).json({
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    cpf: user.cpf
                }
            }) 
        } catch(err: any){
          return response.status(400).json({
              message: err.message
          })
        }
    }   
}