//Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');
 
// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');

const Clientes = sequelize.define("clientes", {
    idCliente: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nomeCliente: {
        allowNull: false,
        type: Sequelize.STRING(80),
        validate: {
            len: [3, 100]
        }
    },
    enderecoCliente: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [1, 100]
        }
    },
    emailCliente: {
        allowNull: true,
        type: Sequelize.STRING(70),
        validate: {
            len: [1, 100]
        }
    },
    telefoneCliente: {
        allowNull: true,
        type: Sequelize.STRING(30),
        validate: {
            len: [1, 100]
        }
    },
    statusCliente: {
        allowNull: false,
        type: Sequelize.BOOLEAN,    
    },
});
/* 
    Clientes.associate = function() {
        Pedidos.belongsTo(models.clientes, {foreignKey: 'idCliente', targetKey: 'clienteId'});
    }
    return Clientes;

}; */

module.exports = Clientes;
