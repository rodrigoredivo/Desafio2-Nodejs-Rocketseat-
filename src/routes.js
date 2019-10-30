import { Router } from 'express';

import StudentController from './app/controller/StudentController';
import UserController from './app/controller/UserController';
import SessionController from './app/controller/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/students', StudentController.store);
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);
routes.put('/users/:id', UserController.update);
routes.put('/students/:id', StudentController.update);

export default routes;
