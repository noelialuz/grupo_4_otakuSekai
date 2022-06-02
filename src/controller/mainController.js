const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const controller = {
    index: (req, res) => {
        const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let offerProducts = [];

		for(let x = 0; x < products.length; x++){
			if(products[x].descuento != 0){
				offerProducts.push(products[x])
			}
		};

        res.render('index', {offerProducts: offerProducts});
    }
};

module.exports = controller;