const express = require('express');
const router = express.Router();


const userController = require('../controller/userController');

const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require("../middlewares/guestMiddleware")

router.get('/register', guestMiddleware , userController.register);
router.post('/', uploadFile.single('Avatar'), validations ,userController.processRegister); 

router.get('/login', userController.login); 
router.post('/logueado', userController.logueado);

router.get('/profile', userController.profile);
router.patch('/:id', validations , userController.profile_id);

module.exports = router;