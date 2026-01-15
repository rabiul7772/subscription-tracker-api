import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) =>
  res.send({ title: 'Get all subscriptions' })
);
subscriptionRouter.get('/:id', (req, res) =>
  res.send({ title: 'Get a subscription details' })
);

subscriptionRouter.post('/', (req, res) =>
  res.send({ title: 'Create a subscriptions' })
);

subscriptionRouter.put('/:id', (req, res) =>
  res.send({ title: 'Update a subscription' })
);

subscriptionRouter.delete('/:id', (req, res) =>
  res.send({ title: 'Delete a subscription' })
);

subscriptionRouter.get('/user/:id', (req, res) =>
  res.send({ title: 'Get all subscriptions by user id' })
);

subscriptionRouter.put('/:id/cancel', (req, res) =>
  res.send({ title: 'Cancel a subscription' })
);

subscriptionRouter.get('/upcoming-renewals', (req, res) =>
  res.send({ title: 'Get upcomming renewals' })
);

export default subscriptionRouter;
