import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  db: {
    name: process.env.DB_NAME || 'myDatabase',
    port: parseInt(process.env.DB_PORT, 10) || 5432,
  },
}));
