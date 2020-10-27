 // Define a utilização do model Pedidos e a dependência http-status
 const Pedidos = require('../models/pedidos');
 const status = require('http-status');
const Clientes = require('../models/clientes');
 // Cria o método Insert, obtendo os dados da request

 exports.Insert = (req, res, next) => {
    const itemsPedido = req.body.itemsPedido;
    const nomePedido = req.body.nomePedido;
    const precoPedido = req.body.precoPedido;
    const clienteIdCliente = req.body.clienteIdCliente
 
    // Popula cada um dos campos do model com os campos recebido na request
    Pedidos.create({
        itemsPedido: itemsPedido,
        precoPedido: precoPedido,
        nomePedido: nomePedido,
        clienteIdCliente: clienteIdCliente,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(pedidos => {
            if (pedidos) {
                res.status(status.OK).send(pedidos);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
}; 
exports.SelectAll = (req, res, next) => {
    Pedidos.findAll({
        include: [Clientes]
    })
        .then(pedidos => {
            if (pedidos) {
                res.status(status.OK).send(pedidos);
            }
        })
        .catch(error => next(error));
}


exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;
 
    Pedidos.findByPk(id)
        .then(pedidos => {
            if (pedidos) {
                res.status(status.OK).send(pedidos);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const itemsPedido = req.body.itemsPedido;
    const nomePedido = req.body.nomePedido;
    const precoPedido = req.body.precoPedido;
   
 
    Pedidos.findByPk(id)
        .then(pedidos => {
            if (pedidos) {
                pedidos.update({
                    itemsPedido: itemsPedido,
                    precoPedido: precoPedido,
                    nomePedido: nomePedido, 
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
 
    Pedidos.findByPk(id)
        .then(pedidos => {
            if (pedidos) {
                pedidos.destroy({
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

    //Clientes.hasMany(Pedidos);
   // Pedidos.belongsTo(Clientes);



   

