const Joi = require('joi'); // import the Joi validation library
const OrderRepository = require('../repositories/OrderRepository');

class OrderService {
    constructor() {
        this.orderRepository = new OrderRepository();
    }

    async getAllOrders() {
        return this.orderRepository.getAllOrders();
    }

    async getOrderById(id) {
        return this.orderRepository.getOrderById(id);
    }

    async createOrder(orderData) {
        // Define a schema for order data
        const schema = Joi.object({
            customer_id: Joi.string().required(),
            order_date: Joi.string().allow(''), // Make it an Optional field -> item_id: Joi.string().allow(''), 
            notes: Joi.string().required()
        });

        // Validate the orderData against the schema
        const {
            error
        } = schema.validate(orderData);
        if (error) {
            // If validation fails, throw an error
            throw new Error(`Invalid order data: ${error.details[0].message}`);
        }

        // If validation succeeds, proceed with creating the order
        return this.orderRepository.createOrder(orderData);
    }

    async populateDatabase() {
        return this.orderRepository.populateDatabase();
    }

    async updateOrder(id, orderData) {
        const schema = Joi.object({
            customer_id: Joi.string().required(),
            order_date: Joi.string().required(), // Make it an Optional field -> item_id: Joi.string().allow(''), 
            notes: Joi.int().required()
        });

        // Validate the orderData against the schema
        const {
            error
        } = schema.validate(orderData);
        if (error) {
            // If validation fails, throw an error
            throw new Error(`Invalid order data: ${error.details[0].message}`);
        }

        // If validation succeeds, proceed with updating the order
        return this.orderRepository.updateOrder(id, orderData);
    }

    async deleteOrder(id) {
        return this.orderRepository.deleteOrder(id);
    }
}

module.exports = OrderService;