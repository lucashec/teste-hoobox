import { Router } from "express";
import { ItemController} from "../controllers/ItemController";
import { ItemCategoryController } from "../controllers/ItemCategoryController";

const itemsRouter = Router();
const itemController = ItemController.getInstace();
const categoryController = ItemCategoryController.getInstace();

itemsRouter.post('/', itemController.create);
itemsRouter.post('/category', categoryController.create);
itemsRouter.get('/filter', itemController.filterByCategory);
itemsRouter.get('/', itemController.getAll);

export default itemsRouter;