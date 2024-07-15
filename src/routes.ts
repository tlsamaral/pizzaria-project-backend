import { Router, Request, Response } from 'express';
import CreateUserController from './controllers/user/CreateUserController';
import AuthUserCnotroller from './controllers/user/AuthUserController';
import DetailUserController from './controllers/user/DetailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

router.post('/users', CreateUserController.handle);
router.post('/session', AuthUserCnotroller.handle);
router.get('/me', isAuthenticated, DetailUserController.handle);

export { router };