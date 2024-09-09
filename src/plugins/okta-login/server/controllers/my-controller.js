'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('okta-login')
      .service('myService')
      .getWelcomeMessage();
  },
});
