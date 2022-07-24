const fs = require('fs');
const path = require('path');
const db = require('../database/models')

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const { validationResult } = require('express-validator');


const controller = {
	/* Ver carrito de compras */
	cart: (req, res) => {
		db.Sales_Detail.findAll()
		.then(respuesta => {
			res.send(respuesta)
		})
		/* res.render('./products/productCart'); */
	},

	/* Ver detalle y descripcion de un producto */
	detail: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let id = req.params.id;
		let product = products.find(product => product.id == id);

		for (let x = 0; x < products.length; x++) {
			if (products[x].id == id) {
				res.render('./products/productDetail', {
					product,
					products: products,
					title: products.name
				});
			}
		}
		res.render('./products/not-found-products', { especificacion: "No encontramos el producto" });
	},


	/* Ver detalle y descripcion de un producto POR CATEGORIA */
	/* ------------------------------ VER DETALLE CATEGORIAS ------------------------------ */

	detailCategory: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let categoria = req.params.categoria;

		let offerProducts = [];
		for (let x = 0; x < products.length; x++) {
			if (products[x].descuento != 0 && products[x].eliminado == "false" && products[x].categoria == categoria) {
				offerProducts.push(products[x])
			}
		}

		let noOfferProducts = [];
		for (let x = 0; x < products.length; x++) {
			if (products[x].descuento == 0 && products[x].eliminado == "false" && products[x].categoria == categoria) {
				noOfferProducts.push(products[x])
			}
		}


		for (let x = 0; x < products.length; x++) {
			if (products[x].categoria == categoria) {
				res.render('./products/productCategory', {
					product: products,
					offerProducts: offerProducts,
					noOfferProducts: noOfferProducts,
				});
			}
		}
		res.render('./products/not-found-products', { especificacion: "No encontramos la categoría" });

	},


	detailAnime: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let anime = req.params.anime;

		let offerProducts = [];
		for (let x = 0; x < products.length; x++) {
			if (products[x].descuento != 0 && products[x].eliminado == "false" && products[x].anime == anime) {
				offerProducts.push(products[x])
			}
		}

		let noOfferProducts = [];
		for (let x = 0; x < products.length; x++) {
			if (products[x].descuento == 0 && products[x].eliminado == "false" && products[x].anime == anime) {
				noOfferProducts.push(products[x])
			}
		}


		for (let x = 0; x < products.length; x++) {
			if (products[x].anime == anime) {
				res.render('./products/productAnime', {
					product: products,
					offerProducts: offerProducts,
					noOfferProducts: noOfferProducts,
				});
			}
		}
		res.render('./products/not-found-products', { especificacion: "Aún no tenemos productos del anime" });

	},


	/* Ver el listado completo de productos */
	verMas: (req, res) => {
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

		let offerProducts = [];

		for (let x = 0; x < products.length; x++) {
			if (products[x].descuento != 0 && products[x].eliminado == "false") {
				offerProducts.push(products[x])
			}
		}

		let noOfferProducts = [];

		for (let x = 0; x < products.length; x++) {
			if (products[x].descuento == 0 && products[x].eliminado == "false") {
				noOfferProducts.push(products[x])
			}
		}

		res.render('./products/productVerMas', {
			products: products,
			offerProducts: offerProducts,
			noOfferProducts: noOfferProducts
		});
	},



	productExtractADMIN: (req, res) =>{
			if(req.session.usuario == undefined){
				return res.render('./users/login', {msg:''});
			}else{
			const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

			res.render('./products/productExtract', {
				products: products
			})
	}
	},


    /* Crear un nuevo producto */
    create: (req, res) => {
		if(req.session.usuario == undefined){
			
			return res.render('./users/login', {msg:''});
		}else{
		res.render('./products/productCreate');}
	},

    store: (req, res) => {
		if(req.session.usuario == undefined){
			return res.render('./users/login', {msg:''});
		}else{
			const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'))
			const resultValidation = validationResult(req);
	
			if (resultValidation.errors.length > 0) {
				return res.render('./products/create', {
					errors: resultValidation.mapped(),
					oldData: req.body,
				});
			}
			else {
				let newProduct = {
					id: products[products.length - 1].id + 1,
					name: req.body.name,
					categoria: req.body.categoria,
					anime: req.body.anime,
					descuento: req.body.descuento,
					precioAnterior: req.body.precioAnterior,
					descripcion: req.body.descripcion,
					imagen1: "/img/productos/" + req.file.filename,
					/* imagen2: "/img/productos/" + req.file.filename,
					imagen3: "/img/productos/" + req.file.filename,
					imagen4: "/img/productos/" + req.file.filename */
					eliminado: "false"
				}
				/* res.send(req.body); */
				products.push(newProduct);
				fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
				res.redirect("/products");
	
			}
				}
	},

    /* Editar un producto existente*/
    edit: (req, res) => {
		if(req.session.usuario == undefined){
			return res.render('./users/login', {msg:''});
		}else{
				const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
				let id = req.params.id
				let productToEdit = products.find(product => product.id == id)
				res.render('./products/productEdit', {productToEdit, title: productToEdit.name});
		}
	},

    update: (req, res) => {
		if(req.session.usuario == undefined){
			return res.render('./users/login', {msg:''});
		}else{
				const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
				let productToEdit = products.find(product => req.params.id == product.id);

				let editedProduct = {
					name: req.body.name,
					categoria: req.body.categoria,
					anime: req.body.anime,
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
				res.redirect("/products");
			}
	},

	/* Eliminar un producto existente*/
	remove: (req, res) => {
		/* Para eliminar un producto definitivamente: 
		const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
		let finalProducts = products.filter(product => product.id != req.params.id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));
		res.redirect("/products");
		 */

		/* Vamos a hacer un BORRADO LÓGICO cambiando propiedades del producto sin eliminarlo por completo */
		if(req.session.usuario == undefined){
			return res.render('./users/login', {msg:''});
		}else{
			const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
			let productToDelete = products.find(product => req.params.id == product.id);
			let removeProduct = "true"
			let indice = products.findIndex(product => product.id == req.params.id);
			products[indice].eliminado = removeProduct;
			fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
			res.redirect("/products");
			}
	},

	removeAdmin : (req, res) => {
		if(req.session.usuario == undefined){
			return res.render('./users/login', {msg:''});
		}else{
				const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
				let productToDelete = products.find(product => req.params.id == product.id);
				let removeProduct = "true"
				let indice = products.findIndex(product => product.id == req.params.id);
				products[indice].eliminado = removeProduct;
				fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
				res.redirect("/products/extractADMIN");
		}
	},

	resetAdmin : (req, res) => {
		if(req.session.usuario == undefined){
			return res.render('./users/login', {msg:''});
		}else{
				const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
				let productToDelete = products.find(product => req.params.id == product.id);
				let removeProduct = "false"
				let indice = products.findIndex(product => product.id == req.params.id);
				products[indice].eliminado = removeProduct;
				fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
				res.redirect("/products/extractADMIN");
		}
	}

};

module.exports = controller;