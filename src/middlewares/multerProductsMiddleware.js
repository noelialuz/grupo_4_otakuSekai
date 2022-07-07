const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/img/productos');
    },

    filename: (req, file, cb) => {
        let fileName = `IMG_${Date.now()}_products${path.extname(file.originalname)}`;
        cb(null, fileName);
    },

})

const uploadFileProducts = multer({storage});

module.exports = uploadFileProducts;