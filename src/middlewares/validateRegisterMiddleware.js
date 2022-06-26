const path = require('path');
const {body} = require('express-validator')

module.exports = [
    body('fullName').notEmpty().withMessage('Falta escribir un nombre'),
    body('DNI').notEmpty().withMessage('Falta escribir un DNI'),
    body('Email').notEmpty()
    .withMessage('Falta escribir un Email')
    .bail().isEmail()
    .withMessage('Debes escribir un formato de correo valido'),
    body('Direction').notEmpty().withMessage('Falta escribir una Direccion'),
    body('Country').notEmpty().withMessage('Falta seleccionar un Pais'),
    body('Phone').notEmpty().withMessage('Falta escribir un Telefono'),
    body('Birthdate').notEmpty().withMessage('Falta seleccionar una fecha'),
    body('Phone').notEmpty().withMessage('Falta escribir un Telefono'),
    body('Password').notEmpty().withMessage('Falta seleccionar una Password'),
    body('confirmPassword').notEmpty().withMessage('Falta confirmar la Password'),
    body('Avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de
                 archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}
		return true;
	}) 
]