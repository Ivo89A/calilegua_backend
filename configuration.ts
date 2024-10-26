export default () => ({
  apiKey: process.env.API_KEY,
  dbname: process.env.DB_NAME,
  database: {
    port: parseInt(process.env.DB_PORT, 10) || 5432,
  },
});
