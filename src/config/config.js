
// Define a string de conexão com o banco de dados
/* module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3306,
            name: 'db_vendas',
            dialect: 'mysql',
            user: 'root',
            password: 'root'
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
} 

 */
const fs = require('fs');


module.exports = {
    development: {
        database: {
            host: 'db-vendas.mysql.database.azure.com',
            port: 3306,
            name: 'db_vendas',
            dialect: 'mysql',
            database: 'quickstartdb',
            user: 'lucassilvs@db-vendas',
            password: 'TpfinalJoseffe2',
            ssl: {require:true},
            dialectOptions: {
                ssl: {
                  ca: fs.readFileSync('./certs/BaltimoreCyberTrustRoot.crt.pem'),
                }
              },
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
} 
