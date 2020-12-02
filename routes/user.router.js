const { Router } = require('express');
const { userController } = require('../controllers');
const { userMiddleware} = require('../middlewares')

const userRouter = Router();

userRouter.post( '/',  userMiddleware.checkUserValid, userController.createUser );

userRouter.get( '/', userController.getUsers );
userRouter.get('/:userName', userMiddleware.checkUserExist, userController.getUserByName);
userRouter.get( '/:email', userMiddleware.checkUserExist, userController.getUserByEmail );

userRouter.delete('/:id', userController.deleteUser );

module.exports = userRouter;
