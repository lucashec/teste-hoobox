import UserRepository from '../../modules/users/infra/typeorm/repositories/UserRepository';
import IUserRepository from '../../modules/users/repositories/IUserRepository';
import {container} from 'tsyringe';
import { IItemCategoryRepository } from '../../modules/items/repositories/IItemCategoryRepository';
import ItemCategoryRepository from '../../modules/items/infra/typeorm/repositories/ItemCategoryRepository';
import { IItemRepository } from '../../modules/items/repositories/IItemRepository';
import ItemRepository from '../../modules/items/infra/typeorm/repositories/ItemRepository';
import { IOrderRepository } from '../../modules/orders/repositories/IOrderRepository';
import OrderRepository from '../../modules/orders/infra/typeorm/repositories/OrderRepository';
import { IOrderItemRepository } from '@modules/orders/repositories/IOrderItemRepository';
import OrderItemRepository from '../../modules/orders/infra/typeorm/repositories/OrderItemRepository';

container.registerSingleton<IUserRepository>(
    'UserRepository',
    UserRepository    
);
container.registerSingleton<IItemCategoryRepository>('ItemCategoryRepository',
    ItemCategoryRepository
);
container.registerSingleton<IItemRepository>('ItemRepository',
    ItemRepository
);
container.registerSingleton<IOrderRepository>('OrderRepository',
    OrderRepository
)
container.registerSingleton<IOrderItemRepository>('OrderItemRepository',
    OrderItemRepository
)