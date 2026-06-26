import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { testDbConnection } from './config/database';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

testDbConnection();

app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running smoothly.' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
