import { Router, Request, Response } from 'express';
import CreateUserController from './controllers/user/CreateUserController';
import AuthUserCnotroller from './controllers/user/AuthUserController';
import DetailUserController from './controllers/user/DetailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';
import CreateCategoryController from './controllers/category/CreateCategoryController';
import ListCategoryController from './controllers/category/ListCategoryController';

const router = Router();

// ROTAS USER
router.post('/users', CreateUserController.handle);
router.post('/session', AuthUserCnotroller.handle);
router.get('/me', isAuthenticated, DetailUserController.handle);

// ROTAS CATEGORIAS
router.post('/category', isAuthenticated, CreateCategoryController.handle);
router.get('/category', isAuthenticated, ListCategoryController.handle)

export { router };