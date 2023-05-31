const {
    MongoClient
} = require('mongodb');


module.exports = function () {
    let operations = {
        GET,

    };

    async function GET(req, res, next) {
        try {
            const uri = 'mongodb://MongoService:27017'; // Replace with your MongoDB connection string
            const dbName = 'logs'; // Replace with your database name
            const client = new MongoClient(uri);
            await client.connect();

            const db = client.db(dbName);
            const collections = await db.listCollections().toArray();

            const data = {};
            for (const collection of collections) {
                const collectionName = collection.name;
                const collectionData = await db.collection(collectionName).find({}).toArray();
                data[collectionName] = collectionData;
            }

            res.status(200).json({
                data
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }

    GET.apiDoc = {
        summary: "Retrieve no customers from the database because broken",
        description: "Lorem ipsum",
        operationId: "get-customers",
        responses: {
            200: {
                description: "Returns a list of all customers",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Logs",
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