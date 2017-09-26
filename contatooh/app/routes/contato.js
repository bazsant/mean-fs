module.exports = function(app) {
    app.get('/contatos', app.controllers.contato.listaContatos);
};