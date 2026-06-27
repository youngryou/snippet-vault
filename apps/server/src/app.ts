import express from 'express';
import cors from 'cors';
import { globalErrorHandler } from './utils/errorHandler.js';
import { AppError } from './utils/appError.js';

import snippetRouter from './routers/snippet.router.js';

const app = express();

// Standard middleware
app.use(cors());
app.use(express.json());

app.use('/api/v1/snippets', snippetRouter);

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.status(200).json({ message: 'Server is running smoothly.' });
});

// Handle 404 (Not Found)
app.use((req, _res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handling middleware (Must be the last middleware)
app.use(globalErrorHandler);

export default app;
