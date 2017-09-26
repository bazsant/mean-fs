module.exports = function(app) {
    app.get('/contatos', app.controllers.contato.listaContatos);
    app.get('/contatos/:id', app.controllers.contato.obtemContato);
};