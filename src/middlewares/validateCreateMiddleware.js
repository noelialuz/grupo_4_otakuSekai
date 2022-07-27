const path = require('path');
const {body} = require('express-validator')

module.exports = [
    body('name').notEmpty().withMessage('Falta escribir un nombre para el producto'),
    body('category').notEmpty().withMessage('Falta elegir una categoria'),
    body('serie').notEmpty().withMessage('Falta elegir un serie'),
    body('price').notEmpty().withMessage('Falta escribir un precio para el producto'),
    body('description').notEmpty().withMessage('Falta escribir una descripción del producto'),
    body('discount').notEmpty().withMessage('Falta aclarar si el producto tiene descuento'),
	body('stock').notEmpty().withMessage('Falta aclarar cual es el stock'),
    body('image').custom((value, { req }) => {
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