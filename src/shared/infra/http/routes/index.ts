import itemsRouter from '../../../../modules/items/infra/http/routes/item.routes';
import {Router} from 'express';
import userRouter from '../../../../modules/users/infra/http/routes/user.routes';
import ordersRouter from '../../../../modules/orders/infra/http/routes/orders.routes';
const routes = Router();

routes.use('/users', userRouter);
routes.use('/items', itemsRouter);
routes.use('/orders', ordersRouter);
export default routes;