import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { testDbConnection } from './config/database';
import { globalErrorHandler } from './utils/errorHandler';
import { AppError } from './utils/appError';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

testDbConnection();

app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running smoothly.' });
});

// Handle 404 (Not Found)
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global Error Handling Middleware
app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
