module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c82bd1072286b8354e53fb66fee8f395'),
  },
});
