const express = require('express');
const router = express.Router();


const userController = require('../controller/userController');

const uploadFile = require('../middlewares/multerMiddleware')
const validations = require('../middlewares/validateRegisterMiddleware')


router.get('/register', userController.register);
router.post('/', uploadFile.single('Avatar'), validations ,userController.processRegister); 

router.get('/login', userController.login); 
router.post('/logueado', userController.logueado);

router.get('/profile/', userController.profile);
router.patch('/:id', userController.profile);

module.exports = router;