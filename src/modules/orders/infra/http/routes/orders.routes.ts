import { Router } from "express";
import { OrderController } from "../controllers/OrderController";
import { OrderItemController } from "../controllers/OrderItemController";

const ordersRouter = Router();
const ordersController = OrderController.getInstace();
const orderItemController = OrderItemController.getInstace();

ordersRouter.get('/', ordersController.getOrdersByUser);
ordersRouter.post('/', ordersController.create);
ordersRouter.post('/order_item', orderItemController.addOrderItem);
ordersRouter.delete('/order_item', orderItemController.removeOrderItem);
ordersRouter.patch('/cancel', ordersController.cancelOrder);
ordersRouter.patch('/confirm', ordersController.confirmOrder);

export default ordersRouter;