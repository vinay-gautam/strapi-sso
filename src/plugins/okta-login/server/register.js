'use strict';

module.exports = ({ strapi }) => {
  // register phase

  strapi.eventHub.on('admin.login', async (context) => {
    console.log("test")
    console.log(context)

   
  });
};
