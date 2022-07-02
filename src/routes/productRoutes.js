const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');


/* Ver el listado completo de productos por Categoria*/
//router.get('/:categoria', productController.detailCategory); //Esto genera cosas raras!!

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
router.patch('/:id', productController.update); 

/* Eliminar un producto existente*/
router.delete('/:id', productController.remove);

/* Ver el listado completo de productos por Categoria*/
router.get('/category/:categoria', productController.detailCategory); 

/* Ver el listado completo de productos por Anime*/
router.get('/anime/:anime', productController.detailAnime); 



/* Exportar modulo */
module.exports = router;