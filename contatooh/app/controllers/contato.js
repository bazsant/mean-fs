var contatos = [
    { _id: '1', nome: 'contato ex 1', email: 'teste_email1@email.com' },
    { _id: '2', nome: 'contato ex 2', email: 'teste_email2@email.com' },
    { _id: '3', nome: 'contato ex 3', email: 'teste_email3@email.com' },
    { _id: '4', nome: 'contato ex 4', email: 'teste_email4@email.com' },
];

module.exports.listaContatos = function(req, res) {
    res.json(contatos);
};

exports.obtemContato = function(req, res) {
    var idContato = req.params.id;

    var contato = contatos.filter(function(param) {
        return param._id === idContato;
    })[0];

    contato ?
        res.json(contato) :
        res.status(404).send('contato nao encontrado');
};