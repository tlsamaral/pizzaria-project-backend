import { Router, Request, Response } from 'express';
import CreateUserController from './controllers/user/CreateUserController';
import AuthUserCnotroller from './controllers/user/AuthUserController';

const router = Router();

router.post('/users', CreateUserController.handle);
router.post('/session', AuthUserCnotroller.handle);

export { router };