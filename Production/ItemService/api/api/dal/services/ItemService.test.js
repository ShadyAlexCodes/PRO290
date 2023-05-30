const ItemService = require('./ItemService');
const ItemRepository = require('../repositories/ItemRepository');
const Joi = require('joi');

// Mock the ItemRepository
jest.mock('../repositories/ItemRepository');

describe('ItemService', () => {
    let itemService;
    let mockItemData;

    beforeEach(() => {
        // Create a new instance of the service for each test
        itemService = new ItemService();

        mockItemData = {
            street_item: '123 Main St',
            city: 'Testville',
            state: 'Test State',
            zipcode: '12345',
            country: 'Test Country'
        };

        // Clear all mock calls before each test
        ItemRepository.mockClear();
    });

    test('getAllItems calls repository', async () => {
        await itemService.getAllItems();
        expect(ItemRepository.prototype.getAllItems).toHaveBeenCalledTimes(1);
    });

    test('getItemById calls repository with correct id', async () => {
        const id = 'test-id';
        await itemService.getItemById(id);
        expect(ItemRepository.prototype.getItemById).toHaveBeenCalledWith(id);
    });

    test('createItem validates input and calls repository', async () => {
        await itemService.createItem(mockItemData);
        expect(ItemRepository.prototype.createItem).toHaveBeenCalledWith(mockItemData);
    });

    test('createItem throws an error if input is invalid', async () => {
        // We've omitted the required 'street_item' field
        const invalidItemData = {
            ...mockItemData,
            street_item: undefined
        };

        await expect(itemService.createItem(invalidItemData)).rejects.toThrow(Joi.ValidationError);
    });

    // Similarly, you can add tests for updateItem and deleteItem
});