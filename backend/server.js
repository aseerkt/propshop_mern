import express from 'express';
import logger from 'morgan';
import 'dotenv/config.js';
import 'colors';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middlewares/errorMiddlewares.js';

connectDB();

const app = express();

app.use(express.json());
app.use(logger('dev'));

app.get('/', (_req, res) => res.send('API is running'));

// Use Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Error Handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
