import knex from 'knex';
import knexConfig from '../../knexfile.js';

const environment = process.env.NODE_ENV || 'development';

export const db = knex(knexConfig[environment as keyof typeof knexConfig]);

export const testDbConnection = async (): Promise<void> => {
  try {
    await db.raw('SELECT 1');
    console.log('Successfully connected to the PostgreSQL database via Knex.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};
