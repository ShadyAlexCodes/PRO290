const ContactInformationService = require('./ContactInformationService');
const ContactInformationRepository = require('../repositories/ContactInformationRepository');
const Joi = require('joi');

// Mock the ContactInformationRepository
jest.mock('../repositories/ContactInformationRepository');

describe('ContactInformationService', () => {
    let contactinformationService;
    let mockContactInformationData;

    beforeEach(() => {
        // Create a new instance of the service for each test
        contactinformationService = new ContactInformationService();

        mockContactInformationData = {
            street_contactinformation: '123 Main St',
            city: 'Testville',
            state: 'Test State',
            zipcode: '12345',
            country: 'Test Country'
        };

        // Clear all mock calls before each test
        ContactInformationRepository.mockClear();
    });

    test('getAllContactInformations calls repository', async () => {
        await contactinformationService.getAllContactInformations();
        expect(ContactInformationRepository.prototype.getAllContactInformations).toHaveBeenCalledTimes(1);
    });

    test('getContactInformationById calls repository with correct id', async () => {
        const id = 'test-id';
        await contactinformationService.getContactInformationById(id);
        expect(ContactInformationRepository.prototype.getContactInformationById).toHaveBeenCalledWith(id);
    });

    test('createContactInformation validates input and calls repository', async () => {
        await contactinformationService.createContactInformation(mockContactInformationData);
        expect(ContactInformationRepository.prototype.createContactInformation).toHaveBeenCalledWith(mockContactInformationData);
    });

    test('createContactInformation throws an error if input is invalid', async () => {
        // We've omitted the required 'street_contactinformation' field
        const invalidContactInformationData = {
            ...mockContactInformationData,
            street_contactinformation: undefined
        };

        await expect(contactinformationService.createContactInformation(invalidContactInformationData)).rejects.toThrow(Joi.ValidationError);
    });

    // Similarly, you can add tests for updateContactInformation and deleteContactInformation
});