module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  middleware: {
    // Add the keys here
    load: {
      before: ['responseTime', 'logger', 'cors', 'responses', 'gzip'],
      order: [
        'Define the middlewares\' load order by putting their name in this array is the right order',
      ],
    },
    settings: {
      keys: ['FQQ9mJkAgXqmIbqNfdCofw==,pXqLdzCdbhwhkZmL9bF/zg==,PipqnvdVSHYWtodU8AiNag==,OnEEjlKgnytF6Tw/pxFRhw==']
    },
    // ...
  },
});
