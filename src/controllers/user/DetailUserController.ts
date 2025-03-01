import { Request, Response } from 'express';
import { DetailUserService } from '../../services/user/DetailUserService';

class DetailUserController {
    async handle(req: Request, res: Response) {
        const id = req.user_id;
        const detailUserService = new DetailUserService();
        const user = await detailUserService.execute(id);

        return res.json(user);
    }
}

export default new DetailUserController();