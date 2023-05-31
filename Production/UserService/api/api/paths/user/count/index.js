const UserService = require("../../../dal/services/UserService");
const userService = new UserService();

module.exports = function () {
    let operations = {
        GET,

    };

    async function GET(req, res, next) {
        try {
            const users = await userService.getUserCount();
            res.status(200).json({
                users: users
            });
        } catch (err) {
            console.error(err);
            res.status(500).json({
                error: "Internal Server Error"
            });
        }
    }


    GET.apiDoc = {
        summary: "Retrieve all users from the database",
        operationId: "get-users",
        responses: {
            200: {
                description: "Returns a list of all users",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User",
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