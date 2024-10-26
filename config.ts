import { registerAs } from '@nestjs/config';

export default registerAs('appConfig', () => ({
  apiKey: process.env.API_KEY,
  db: {
    name: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
  },
}));
