const { userService } = require('../services')

module.exports = {
    createUser: (req, res) => {
        try {
            const user = req.body;
            const createdUser = userService.createUser(user);

            res.json(createdUser);
        } catch (e) {
            res.status(400).json(e.message);
        }

    },

    getUsers: (req, res) => {
        try {
            const users = userService.getUsers();

            res.json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }

    },

    getUserByName: (req, res) => {
        try {
            const { name } = req.params;
            const user = userService.getUserByName(name);

            res.json(user);

        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    getUserByEmail: (req, res) => {
        try {
            const { email } = req.params;
            const user = userService.getUserByEmail(email);

            res.json(user);

        } catch (e) {
            res.status(400).json(e.message);
        }
    },

    deleteUser: (req, res) => {
        try {
            const {id} = req.params;
            userService.deleteUser(id);

            res.json('deleted');

        } catch (e) {
            res.status(400).json(e.message);
        }
    }
};
