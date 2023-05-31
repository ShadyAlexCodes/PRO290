const OrderService = require("../../../dal/services/OrderService");
const orderService = new OrderService();

module.exports = function () {
    let operations = {
        GET,
    };

    async function GET(req, res, next) {
        try {
            const orders = await orderService.getOrderCount();
            res.status(200).json({
                orders: orders
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    }

    GET.apiDoc = {
        summary: "Retrieve all orders from the database",
        operationId: "get-orders",
        responses: {
            200: {
                description: "Returns a list of all orders",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Order",
                        },
                    },
                },
            },
            500: {
                description: "Internal Server Error",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Error",
                        },
                    },
                },
            },
        },
    };

    return operations;
};