import { Router, Request, Response } from 'express';
import multer from 'multer';

import CreateUserController from './controllers/user/CreateUserController';
import AuthUserCnotroller from './controllers/user/AuthUserController';
import DetailUserController from './controllers/user/DetailUserController';
import CreateCategoryController from './controllers/category/CreateCategoryController';
import ListCategoryController from './controllers/category/ListCategoryController';
import CreateProductController from './controllers/product/CreateProductController';

import { isAuthenticated } from './middlewares/isAuthenticated';
import uploadConfig from './config/multer';
import CreateOrderController from './controllers/order/CreateOrderController';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));
// ROTAS USER
router.post('/users', CreateUserController.handle);
router.post('/session', AuthUserCnotroller.handle);
router.get('/me', isAuthenticated, DetailUserController.handle);

// ROTAS CATEGORIAS
router.post('/category', isAuthenticated, CreateCategoryController.handle);
router.get('/category', isAuthenticated, ListCategoryController.handle);

// ROTAS PRODUCT 
router.post('/product', isAuthenticated, upload.single('file'), CreateProductController.handle);
router.get('/category/product', isAuthenticated, ListCategoryController.handle);

// ROTAS ORDER
router.post('/order', isAuthenticated, CreateOrderController.handle);

export { router };