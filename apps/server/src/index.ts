import dotenv from 'dotenv';
import app from './app.js';
import { testDbConnection } from './config/database.js';

// Load environment variables before anything else
dotenv.config();

const port = process.env.PORT || 3000;

// Test database connection on startup
testDbConnection();

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
