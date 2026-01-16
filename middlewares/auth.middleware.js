import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { JWT_SECRET } from '../config/env.js';

const authorize = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token)
      res.status(401).json({
        message: 'Not authorized'
      });

    const decodedToken = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decodedToken.userId);

    if (!user) res.status(401).json({ message: 'Not authorized' });

    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({
      message: 'Not authorized',
      error: error.message
    });
  }
};

export default authorize;
