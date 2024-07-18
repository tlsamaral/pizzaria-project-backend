import prismaClient from "../../prisma";

interface OrderItemRequest {
    order_id: string;
    product_id: string;
    amount: number;
}
class AddItemService {
    async execute({ order_id, product_id, amount }: OrderItemRequest) {
        const orderItem = prismaClient.item.create({
            data: {
                order_id: order_id,
                product_id: product_id,
                amout: amount
            },
            select: {
                id: true,
                order_id: true,
                product_id: true,
            }
        });

        return orderItem;
    }
}

export { AddItemService }