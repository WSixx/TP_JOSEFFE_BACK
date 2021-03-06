const http = require('http');
const express = require('express');
const status = require('http-status');
const sequelize = require('./src/database/database');
const app = express();
const routes = require('./src/routes/routes.js');
const cors = require('cors');
 
app.use(express.json());
 
app.use(cors());
 
app.use('/', routes);

 
app.use((req, res, next) => {
    res.status.apply(status.NOT_FOUND).send();
});
 
app.use((req, res, next) => {
    res.status.apply(status.INTERNAL_SERVER_ERROR).json({error});
});

//const port = process.env.port || 8080;
const port = process.env.PORT || 3000;
//app.listen(port);

sequelize.sync({force: false}).then( () => {
    //const port = 3000;
    app.set("port", port);
    const server = http.createServer(app);
    server.listen(port);
});
