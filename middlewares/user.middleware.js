const { userService } = require('../services')

module.exports = {
    checkUserValid: (req, res, next) => {
      try {
          const user = req.body;

          if (!user.email || !user.password) {
              throw new Error('User is not valid');
          }

          next();

      } catch (e) {
          res.status(400).json(e.message);
      }

    },

    checkUserExist: (req, res, next) => {
        try {
            const { email } = req.body;
            const userEmail = userService.getUsers();
            const checkUser = userEmail.find((user) => user.email === email);

            if (checkUser) {
                throw new Error('User already exist');
            }

            next();

        } catch (e) {
            res.status(400).json(e.message);
        }
    }

};
