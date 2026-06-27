import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const toSnakeCase = (str) =>
  str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const toCamelCase = (str) =>
  str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());

const convertKeysToCamel = (obj) => {
  if (!obj || typeof obj !== 'object' || obj instanceof Date) return obj;
  if (Array.isArray(obj)) return obj.map(convertKeysToCamel);

  const newObj = {};
  for (const key of Object.keys(obj)) {
    newObj[toCamelCase(key)] = convertKeysToCamel(obj[key]);
  }
  return newObj;
};

export default {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'src/db/migrations'),
    },
    seeds: {
      directory: path.join(__dirname, 'src/db/seeds'),
    },

    postProcessResponse: (result) => {
      if (!result) return result;
      if (typeof result.command === 'string' && Array.isArray(result.rows)) {
        return { ...result, rows: convertKeysToCamel(result.rows) };
      }
      return convertKeysToCamel(result);
    },

    wrapIdentifier: (value, origImpl) => {
      if (value === '*') return origImpl(value);
      return origImpl(toSnakeCase(value));
    },
  },
};
