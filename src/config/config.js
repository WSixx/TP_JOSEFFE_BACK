
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
require('dotenv/config');
module.exports = {


    development: {
        database: {
           host: process.env.DB_HOST,
           port: process.env.DB_PORT,
            name: process.env.DB_NAME,
            database: 'db_vendas',
            dialect: process.env.DB_DIALECT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
        
            //ssl: {require:true},
           /*  dialectOptions: {
                ssl: {
                  ca: fs.readFileSync('./certs/BaltimoreCyberTrustRoot.crt.pem'),
                }
              },    */     
                 
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME,
            dialect: process.env.DB_DIALECT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        }
    }
} 
