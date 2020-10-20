const express = require('express');
const ProdutosController = require ('../controllers/produtos_controller.js');
const ClientesController = require ('../controllers/clientes_controller.js');
const PedidosController = require ('../controllers/pedidos_controller.js');

const sequelize = require ('../database/database.js');

const router = express.Router();

router.post('/clientes', ClientesController.Insert);
router.get('/clientes', ClientesController.SelectAll);
router.get('/clientes/:nome', ClientesController.SelectAll2);
router.get('/clientes/:id', ClientesController.SelectDetail);
router.put('/clientes/:id', ClientesController.Update);
router.delete('/clientes/:id', ClientesController.Delete);
 
router.post('/produtos', ProdutosController.Insert);
router.get('/produtos', ProdutosController.SelectAll);
router.get('/produtos/:id', ProdutosController.SelectDetail);
router.put('/produtos/:id', ProdutosController.Update);
router.delete('/produtos/:id', ProdutosController.Delete);

router.post('/pedidos', PedidosController.Insert);
router.get('/pedidos', PedidosController.SelectAll);
router.get('/pedidos/:id', PedidosController.SelectDetail);
router.put('/pedidos/:id', PedidosController.Update);
router.delete('/pedidos/:id', PedidosController.Delete);

module.exports = router;
