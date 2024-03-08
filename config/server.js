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
      keys: ['f50c6878d7cea063126c0fbcdad42bab5ff9e9af501f4505ee5fcf61c727f0c7'],
    },
    // ...
  },
});
