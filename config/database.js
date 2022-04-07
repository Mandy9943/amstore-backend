module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5000),
      database: env('DATABASE_NAME', 'tienda'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'Calle7y10'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
