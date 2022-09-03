const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');

router.get('/', mainController.index);
router.get('/quienesSomos', mainController.quienesSomos);
router.get('/sitioEnConstruccion', mainController.enConstruccion);
router.get('/preguntasFrecuentes', mainController.preguntasFrecuentes);

module.exports =  router;