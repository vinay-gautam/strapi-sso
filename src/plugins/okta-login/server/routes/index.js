module.exports = [
  {
    method: 'GET',
    path: '/test',
    handler: 'myController.index',
    config: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/okta',
    handler: 'okta.oktaSignIn',
    config: {
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/okta/callback',
    handler: 'okta.oktaSignInCallback',
    config: {
      auth: false,
    },
  },

  {
    method: 'GET',
    path: '/okta/logout', // Path for logout
    handler: 'okta.oktaLogout', // Handler that performs the logout
    config: {
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/save-token',
    handler: 'okta.getCacheValue',
    config: {
      auth: false,
    },
  },

];
