const OrderItemsService = require('./OrderItemsService');
const OrderItemsRepository = require('../repositories/OrderItemsRepository');
const Joi = require('joi');

// Mock the OrderItemsRepository
jest.mock('../repositories/OrderItemsRepository');

describe('OrderItemsService', () => {
    let orderitemsService;
    let mockOrderItemsData;

    beforeEach(() => {
        // Create a new instance of the service for each test
        orderitemsService = new OrderItemsService();

        mockOrderItemsData = {
            street_orderitems: '123 Main St',
            city: 'Testville',
            state: 'Test State',
            zipcode: '12345',
            country: 'Test Country'
        };

        // Clear all mock calls before each test
        OrderItemsRepository.mockClear();
    });

    test('getAllOrderItemss calls repository', async () => {
        await orderitemsService.getAllOrderItemss();
        expect(OrderItemsRepository.prototype.getAllOrderItemss).toHaveBeenCalledTimes(1);
    });

    test('getOrderItemsById calls repository with correct id', async () => {
        const id = 'test-id';
        await orderitemsService.getOrderItemsById(id);
        expect(OrderItemsRepository.prototype.getOrderItemsById).toHaveBeenCalledWith(id);
    });

    test('createOrderItems validates input and calls repository', async () => {
        await orderitemsService.createOrderItems(mockOrderItemsData);
        expect(OrderItemsRepository.prototype.createOrderItems).toHaveBeenCalledWith(mockOrderItemsData);
    });

    test('createOrderItems throws an error if input is invalid', async () => {
        // We've omitted the required 'street_orderitems' field
        const invalidOrderItemsData = {
            ...mockOrderItemsData,
            street_orderitems: undefined
        };

        await expect(orderitemsService.createOrderItems(invalidOrderItemsData)).rejects.toThrow(Joi.ValidationError);
    });

    // Similarly, you can add tests for updateOrderItems and deleteOrderItems
});