const express = require('express');
const router = express.Router();

const productController = require('../controller/productController');

router.get('/cart', productController.cart);
router.get('/detail', productController.detail); 
router.get('/verMas', productController.verMas); 

module.exports = router;