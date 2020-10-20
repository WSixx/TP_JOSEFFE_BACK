 // Define a utilização do model Clientes e a dependência http-status
 const Clientes = require('../models/clientes');
 const status = require('http-status');
 const Sequelize = require('sequelize');
const Pedidos = require('../models/pedidos');

 const Op = Sequelize.Op;
 // Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const nomeCliente = req.body.nomeCliente;
    const enderecoCliente = req.body.enderecoCliente;
    const emailCliente = req.body.emailCliente;
    const telefoneCliente = req.body.telefoneCliente;
    const statusCliente = req.body.statusCliente;
 
    // Popula cada um dos campos do model com os campos recebido na request
    Clientes.create({
        nomeCliente: nomeCliente,
        enderecoCliente: enderecoCliente,
        emailCliente: emailCliente,
        telefoneCliente: telefoneCliente,
        statusCliente: statusCliente,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(clientes => {
            if (clientes) {
                res.status(status.OK).send(clientes);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
}; 

exports.SelectAll = (req, res, next) => {
    Clientes.findAll({
        order: [
            // Will escape title and validate DESC against a list of valid direction parameters
            ['statusCliente', 'ASC'],
        ],
    })
        .then(clientes => {
            if (clientes) {
                res.status(status.OK).send(clientes);
            }
        })
        .catch(error => next(error));    
};

exports.SelectAll2 = (req, res, next) => {
    const nome = req.params.nome;
    Clientes.findAll({
        where:{ 
            nomeCliente: {
            [Op.like] : '%' + nome + '%',
          }}
       
       /*  where: {
            nomeCliente: nome,
          } */
    })
        .then(clientes => {
            if (clientes) {
                res.status(status.OK).send(clientes);
            }
        })
        .catch(error => next(error));    
};

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;
 
    Clientes.findByPk(id)
        .then(clientes => {
            if (clientes) {
                res.status(status.OK).send(clientes);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const nomeCliente = req.body.nomeCliente;
    const enderecoCliente = req.body.enderecoCliente;
    const emailCliente = req.body.emailCliente;
    const telefoneCliente = req.body.telefoneCliente;
    const statusCliente = req.body.statusCliente;

 
    Clientes.findByPk(id)
        .then(clientes => {
            if (clientes) {
                clientes.update({
                    nomeCliente: nomeCliente,
                    enderecoCliente: enderecoCliente,
                    emailCliente: emailCliente,
                    telefoneCliente: telefoneCliente,
                    statusCliente: statusCliente,
                },
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
 
exports.Delete = (req, res, next) => {
    const id = req.params.id;
 
    Clientes.findByPk(id)
        .then(clientes => {
            if (clientes) {
                clientes.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
Clientes.hasMany(Pedidos);
Pedidos.belongsTo(Clientes);


/* Clientes.associate = function(models) {
    Pedidos.belongsTo(models.clientes, {foreignKey: 'idCliente', targetKey: 'clienteId'});
}
return Clientes; */
