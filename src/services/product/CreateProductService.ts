import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}
class CreateProductService {
    async execute({ name, description, price, banner, category_id }: ProductRequest) {
        return { ok: true };
    }
}

export { CreateProductService };