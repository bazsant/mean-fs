module.exports = function (app) {
    app.get('/', app.controllers.home.index);
    app.get('/index', app.controllers.home.index);
}