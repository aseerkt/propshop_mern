import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('got here');
      req.user = await User.findById(decoded.id).select(
        '-password -createdAt -updatedAt -__v'
      );
      next();
    } catch (err) {
      console.log(err);
      res.status(401);
      throw new Error('Not Authorized - Bad Token');
    }
  } else {
    res.status(401);
    throw new Error('Not Authorized - Bad Token');
  }
});

export { protect };
