import express from 'express';
import 'dotenv/config.js';
import 'colors';
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';
import { errorHandler, notFound } from './middlewares/errorMiddlewares.js';

connectDB();

const app = express();

app.get('/', (_req, res) => res.send('API is running'));

// Use Routes
app.use('/api/products', productRoutes);

// Error Handler
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
