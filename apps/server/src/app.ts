import express from 'express';
import cors from 'cors';
import { globalErrorHandler } from './utils/errorHandler';
import { AppError } from './utils/appError';

const app = express();

// Standard middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running smoothly.' });
});

// Handle 404 (Not Found) for all undefined routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling middleware (Must be the last middleware)
app.use(globalErrorHandler);

export default app;
