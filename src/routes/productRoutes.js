const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');
const uploadFileProducts = require('../middlewares/multerProductsMiddleware')
const validationsProducts = require('../middlewares/validateCreateMiddleware')


/* ADMIN - Ver detalle de productos */
router.get('/extractADMIN', productController.productExtractADMIN);

/* Crear un nuevo producto */
router.get('/create', productController.create); 
/* router.post('/', productController.store); */
router.post('/', uploadFileProducts.single('imagen1'), validationsProducts, productController.store); 

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

/* Eliminar un producto existente DESDE ADMIN*/
router.delete('/deleteADMIN/:id', productController.removeAdmin);

/* Reestablecer un producto existente DESDE ADMIN*/
router.patch('/resetADMIN/:id', productController.resetAdmin);

/* Ver el listado completo de productos por Categoria*/
router.get('/category/:categoria', productController.detailCategory); 

/* Ver el listado completo de productos por Anime*/
router.get('/anime/:anime', productController.detailAnime); 



/* Exportar modulo */
module.exports = router;