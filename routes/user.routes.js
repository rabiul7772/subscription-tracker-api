import { Router } from 'express';
import { getCurrentUser, getUsers } from '../controllers/user.controller.js';
import authorize from '../middlewares/auth.middleware.js';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', authorize, getCurrentUser);

userRouter.post('/', (req, res) => res.send({ title: 'Create a user' }));

userRouter.put('/:id', (req, res) => res.send({ title: 'Update a user' }));

userRouter.delete('/:id', (req, res) => res.send({ title: 'Delete a user' }));

export default userRouter;
