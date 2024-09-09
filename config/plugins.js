module.exports = {
    'okta-login': {
      enabled: true,
      resolve: './src/plugins/okta-login',
      config: {
        // Okta configuration
        OKTA_OAUTH_CLIENT_ID: '0oajch7oegz1rum1y5d7',
        OKTA_OAUTH_CLIENT_SECRET: 'SAdYFhW-BHr9gRoJXNkQZ5axwGSQoqdhDYkSQWiJvclXk7O7q4Y5NSfa6-uvL0aI',
        OKTA_OAUTH_REDIRECT_URI: 'http://localhost:1337/okta-login/okta/callback',
        OKTA_SCOPES: 'openid profile email',
        OKTA_OAUTH_DOMAIN: 'https://dev-01324087.okta.com',
        OAUTH_ENDPOINT: 'https://dev-01324087.okta.com/oauth2/default/v1/authorize',
        OAUTH_TOKEN_ENDPOINT: 'https://dev-01324087.okta.com/oauth2/default/v1/token',
        OAUTH_USER_INFO_ENDPOINT: 'https://dev-01324087.okta.com/oauth2/default/v1/userinfo',
        OAUTH_GRANT_TYPE: 'authorization_code',
        OAUTH_RESPONSE_TYPE: 'code',
        OAUTH_SCOPE: 'openid profile email',
        OKTA_LOGOUT_ENDPOINT: 'https://dev-01324087.okta.com/oauth2/default/v1/logout',
        OKTA_OAUTH_POST: 'http://localhost:1337',
        REMEMBER_ME:"true",
        TEST_URL:'http://localhost:1337'
      },
    },
  };
  