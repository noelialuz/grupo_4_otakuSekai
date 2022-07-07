const path = require('path');
const {body} = require('express-validator')

module.exports = [
    body('name').notEmpty().withMessage('Falta escribir un nombre para el producto'),
    body('categoria').notEmpty().withMessage('Falta elegir una categoria'),
    body('anime').notEmpty().withMessage('Falta elegir un anime'),
    body('precioAnterior').notEmpty().withMessage('Falta escribir un precio para el producto'),
    body('descripcion').notEmpty().withMessage('Falta escribir una descripción del producto'),
    body('descuento').notEmpty().withMessage('Falta aclarar si el producto tiene descuento'),
    body('imagen1').custom((value, { req }) => {
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