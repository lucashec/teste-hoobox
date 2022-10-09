import { Router } from "express";
import { UserController } from "../controllers/UserController";

const userRouter = Router();
const controller = UserController.getInstace();

userRouter.post('/', controller.create);
export default userRouter;