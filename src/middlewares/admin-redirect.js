// ./src/middlewares/admin-redirect.js
module.exports = (_config, { strapi }) => {
    const redirects = ['/', '/index.html'].map((path) => ({
        method: 'GET',
        path,
        handler: (ctx) => {
            console.log(`Redirecting ${ctx.request.url}`); // Debugging output
            ctx.redirect('http://localhost:1337/admin/auth/login');
        },
        config: { auth: false },
    }));

    strapi.server.routes(redirects);
};
