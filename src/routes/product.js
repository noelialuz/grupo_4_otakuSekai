const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

/* Crear un nuevo producto */
router.get('/create', productController.create); 
router.post('/', productController.store);

/* Ver carrito de compras */
router.get('/cart', productController.cart);

/* Ver detalle y descripcion de un producto */
router.get('/:id', productController.detail); 

/* Ver el listado completo de productos */
router.get('/', productController.verMas); 

/* Editar un producto existente*/
router.get('/:id/edit', productController.edit);
router.patch('/edit/:id', productController.update); 

/* Eliminar un producto existente*/
router.delete('/delete/:id', productController.destroy);


/* Exportar modulo */
module.exports = router;