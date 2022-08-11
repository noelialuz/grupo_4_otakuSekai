const express = require('express');
const router = express.Router();


const userController = require('../controller/userController');

const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")

router.get('/register', guestMiddleware , userController.register);
router.post('/', uploadFile.single('Avatar'), validations ,userController.processRegister); 

router.get('/login', guestMiddleware , userController.login); 
router.post('/logueado', userController.logueado);
router.get("/logout", userController.logout)

router.get('/profile', authMiddleware , userController.profile);
router.patch('/:id', validations , userController.profile_id);
router.get('/profile/edit', userController.profileEdit);


module.exports = router;