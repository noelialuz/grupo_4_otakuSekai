const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const controller = {
    /* Ver carrito de compras */
    cart: (req, res) => {
        res.render('./products/productCart');
    },

    /* Ver detalle y descripcion de un producto */
    detail: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id;
		let product = products.find(product => product.id == id);
		res.render('./products/productDetail', {
			product,
			products: products,
			title: product.name
		})
	},

    /* Ver el listado completo de productos */
    verMas: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let offerProducts = [];

		for(let x = 0; x < products.length; x++){
			if(products[x].descuento != 0){
				offerProducts.push(products[x])
			}
		}
        res.render('./products/productVerMas', {
			products: products,
			offerProducts: offerProducts,
			title: "Products" });
    },

    /* Crear un nuevo producto */
    create: (req, res) => {
		res.render('./products/productCreate',{
			title: "Create Product"
		})
	},

    store: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let newProduct = {
			name: req.body.name,
			categoria: req.body.categoria,
			descuento: req.body.descuento,
			precioAnterior: req.body.precioAnterior,
            descripcion: req.body.descripcion,
            id: products[products.length - 1].id + 1,
			imagen1: "imageTest.jpg",
            imagen2: "imageTest.jpg",
            imagen3: "imageTest.jpg",
            imagen4: "imageTest.jpg",
		}

		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
	
		res.redirect("/products", {
			title: 'Products'
		});
	},

    /* Editar un producto existente*/
    edit: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('./products/productEdit', {productToEdit, title: "Edit Product"})
	},

    update: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let productToEdit = products.find(product => req.params.id == product.id);

		let editedProduct = {
            name: req.body.name,
			categoria: req.body.categoria,
			descuento: req.body.descuento,
			precioAnterior: req.body.precioAnterior,
            descripcion: req.body.descripcion,
            id: req.params.id,
			imagen1: productToEdit.imagen1,
            imagen2: productToEdit.imagen2,
            imagen3: productToEdit.imagen3,
            imagen4: productToEdit.imagen4,
		}

		let indice = products.findIndex(product => product.id == req.params.id);
		products[indice] = editedProduct;

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
		res.redirect("/products/verMas", {title: "Update Product"});
	},

    /* Eliminar un producto existente*/
    destroy : (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let finalProducts = products.filter(product => product.id != req.params.id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
		
		res.redirect("/products/verMas", {title:  "Delete Product"});
	}


};

module.exports = controller;