import { Router } from 'express';

const authRouter = Router();

authRouter.post('/', (req, res) => res.send({ title: 'sing up successfully' }));
authRouter.post('/sign-in', (req, res) =>
  res.send({ title: 'sing in successfully' })
);
authRouter.post('/sign-out', (req, res) =>
  res.send({ title: 'sing out successfully' })
);

export default authRouter;
