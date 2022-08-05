const fs = require("fs");
const path = require("path");
const db = require("../database/models");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const { validationResult } = require("express-validator");
const { push } = require("../middlewares/validateCreateMiddleware");

const dbProducts = db.Products;

const controller = {
  /* Ver carrito de compras */
  cart: (req, res) => {
    res.render("./products/productCart");
  },

  /* Ver detalle y descripcion de un producto */
  detail: (req, res) => {
    db.Products.findByPk(req.params.id).then(function (product) {
      db.Products.findAll().then(function (products) {
        if (product != null) {
          res.render("./products/productDetail", {
            product,
            products: products,
            title: product.name,
          });
        } else {
          res.render("./products/not-found-products", {
            especificacion: "No encontramos el producto",
          });
        }
      });
    });
  },

  /* Ver detalle y descripcion de un producto POR CATEGORIA */
  /* ------------------------------ VER DETALLE CATEGORIAS ------------------------------ */

  detailCategory: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let categoria = req.params.categoria;

    let offerProducts = [];
    for (let x = 0; x < products.length; x++) {
      if (
        products[x].descuento != 0 &&
        products[x].eliminado == "false" &&
        products[x].categoria == categoria
      ) {
        offerProducts.push(products[x]);
      }
    }

    let noOfferProducts = [];
    for (let x = 0; x < products.length; x++) {
      if (
        products[x].descuento == 0 &&
        products[x].eliminado == "false" &&
        products[x].categoria == categoria
      ) {
        noOfferProducts.push(products[x]);
      }
    }

    for (let x = 0; x < products.length; x++) {
      if (products[x].categoria == categoria) {
        res.render("./products/productCategory", {
          product: products,
          offerProducts: offerProducts,
          noOfferProducts: noOfferProducts,
        });
      }
    }
    res.render("./products/not-found-products", {
      especificacion: "No encontramos la categoría",
    });
  },

  detailAnime: (req, res) => {
    const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    let anime = req.params.anime;

    let offerProducts = [];
    for (let x = 0; x < products.length; x++) {
      if (
        products[x].descuento != 0 &&
        products[x].eliminado == "false" &&
        products[x].anime == anime
      ) {
        offerProducts.push(products[x]);
      }
    }

    let noOfferProducts = [];
    for (let x = 0; x < products.length; x++) {
      if (
        products[x].descuento == 0 &&
        products[x].eliminado == "false" &&
        products[x].anime == anime
      ) {
        noOfferProducts.push(products[x]);
      }
    }

    for (let x = 0; x < products.length; x++) {
      if (products[x].anime == anime) {
        res.render("./products/productAnime", {
          product: products,
          offerProducts: offerProducts,
          noOfferProducts: noOfferProducts,
        });
      }
    }
    res.render("./products/not-found-products", {
      especificacion: "Aún no tenemos productos del anime",
    });
  },

  /* Ver el listado completo de productos */
  verMas: (req, res) => {
    db.Products.findAll().then(function (products) {
      
      let offerProducts = [];
      let noOfferProducts = [];
      for (let x = 0; x < products.length; x++) {
        if(products[x].deleted != 1){
          
          if (products[x].discount != 0 ) {
            offerProducts.push(products[x]);
          }
          else{
            noOfferProducts.push(products[x]);
          }
        }
      }

      res.render("./products/productVerMas", {
        products: products,
        offerProducts: offerProducts,
        noOfferProducts: noOfferProducts,
      });
    });
  },

  productExtractADMIN: (req, res) => {
    if (req.session.usuario == undefined) {
      return res.render("./users/login", { msg: "" });
    } else {
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

      res.render("./products/productExtract", {
        products: products,
      });
    }
  },

  /* Crear un nuevo producto */
  create: (req, res) => {
    if (req.session.usuario == undefined) {
      return res.render("./users/login", { msg: "" });
    } else {
      db.Categories.findAll().then(function (categories) {
        db.Series.findAll().then(function (series) {
          res.render("./products/productCreate", {
            categories: categories,
            series: series,
          });
        });
      });
    }
  },

  store: (req, res) => {
    if (req.session.usuario == undefined) {
      return res.render("./users/login", { msg: "" });
    } else {
      const resultValidation = validationResult(req);

      if (resultValidation.errors.length > 0) {
        return res.render("./products/create", {
          errors: resultValidation.mapped(),
          oldData: req.body,
        });
      } else {
        dbProducts
          .create({
            name: req.body.name,
            category_id: req.body.category,
            serie_id: req.body.serie,
            price: req.body.price,
            discount: req.body.discount,
            description: req.body.description,
            image: "/img/productos/" + req.file.filename,
            deleted: false,
            stock: req.body.stock,
          })
          .then(() => {
            return res.redirect("/products");
          })
          .catch((error) => res.send(error));
      }
    }
  },

  /* Editar un producto existente*/
  edit: (req, res) => {
    if (req.session.usuario == undefined) {
      return res.render("./users/login", { msg: "" });
    } else {
      let productID = req.params.id;
      db.Products.findByPk(productID, {
        include: [{ association: "categories" }, { association: "series" }],
      }).then(function (product) {
        db.Categories.findAll().then(function (allCategories) {
          db.Series.findAll().then(function (allSeries) {
            res.render("./products/productEdit", {
              product,
              allCategories: allCategories,
              allSeries: allSeries,
              title: product.name,
            });
          });
        });
      });
    }
  },

  update: (req, res) => {
    if (req.session.usuario == undefined) {
      return res.render("./users/login", { msg: "" });
    } else {
      let productID = req.params.id;
      db.Products.update(
        {
          name: req.body.name,
          category_id: req.body.category_id,
          serie_id: req.body.serie_id,
          price: req.body.price,
          discount: req.body.discount,
          description: req.body.description,
          image: "/img/productos/" + req.file.filename,
          deleted: false,
          stock: req.body.stock,
        },
        {
          where: { id: productID },
        }
      )
        .then(() => {
          return res.redirect("/products");
        })
        .catch((error) => res.send(error));
    }
  },

  /* Eliminar un producto existente*/
  remove: (req, res) => {
   
    if (req.session.usuario == undefined) {
      return res.render("./users/login", { msg: "" });
    } else {
      let removeProduct = "true";
       db.Products.update(
        {
          deleted: removeProduct
        },
        {
          where: { id: req.params.id },
        }
      ).then(() => {
        res.redirect("/products");
      })
      .catch((error) => res.send(error));
      
    }
  },

  removeAdmin: (req, res) => {
    if (req.session.usuario == undefined) {
      return res.render("./users/login", { msg: "" });
    } else {
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      let productToDelete = products.find(
        (product) => req.params.id == product.id
      );
      let removeProduct = "true";
      let indice = products.findIndex((product) => product.id == req.params.id);
      products[indice].eliminado = removeProduct;
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
      res.redirect("/products/extractADMIN");
    }
  },

  resetAdmin: (req, res) => {
    if (req.session.usuario == undefined) {
      return res.render("./users/login", { msg: "" });
    } else {
      const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
      let productToDelete = products.find(
        (product) => req.params.id == product.id
      );
      let removeProduct = "false";
      let indice = products.findIndex((product) => product.id == req.params.id);
      products[indice].eliminado = removeProduct;
      fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
      res.redirect("/products/extractADMIN");
    }
  },
};

module.exports = controller;
