export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db-postgresql-strapi-59882-do-user-13064324-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'defaultdb'),
      user: env('DATABASE_USERNAME', 'doadmin'),
      password: env('DATABASE_PASSWORD', 'AVNS_s_GLy7COF3y4z5mUxfI'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
