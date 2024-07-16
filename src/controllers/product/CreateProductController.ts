import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(request: Request, response: Response) {
        const createProductService = new CreateProductService();
        const { name, price, description, category_id } = request.body;
        let banner = '';

        const product = await createProductService.execute({ name, price, description, banner, category_id });
        return response.json(product);
    }
}

export default new CreateProductController();