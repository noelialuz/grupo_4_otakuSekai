const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');

router.get('/', mainController.index);
router.get('/quienesSomos', mainController.quienesSomos);
router.get('/sitioEnConstruccion', mainController.enConstruccion);

module.exports =  router;