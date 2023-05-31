const apiDoc = {
    openapi: "3.0.2",
    info: {
        title: "Log Service API",
        version: "1.0.0"
    },

    paths: {},
    components: {
        schemas: {
            Error: {
                type: "object",
                properties: {
                    message: {
                        type: "string"
                    },
                    internal_code: {
                        type: "string"
                    }
                }
            },
            Logs: {
                type: "object",
                properties: {
                    status: {
                        type: 'string',
                    },
                    event: {
                        type: 'string',
                    },
                    message: {
                        type: 'string',
                    },
                    timestamp: {
                        type: 'string',
                        format: 'date-time',
                    },
                },
                //required: ['name', 'parent_id', 'address_id', 'shipping_address_id', 'primary_contact_id', 'is_active']
            }
        }
    }
};

module.exports = apiDoc;