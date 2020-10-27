//Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');

// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');

const Pedidos = sequelize.define("pedidos", {
    
    idPedido: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nomePedido: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
            len: [1, 100]
        }
    },
    itemsPedido: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
            len: [1, 100]
        }
    },
    precoPedido: {
        allowNull: true,
        type: Sequelize.DOUBLE,
        validate: {
            len: [1, 999999]
        }
    },

  /*   clienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'clientes',
          key: 'idCliente'
        } 
      }, */


});
module.exports = Pedidos;

/* Pedidos.associate = function(models) {
    Pedidos.hasMany(models.clientes, {foreignKey: 'idCliente',sourceKey: 'clienteId'});
}

return Pedidos; */
//Relations

    

