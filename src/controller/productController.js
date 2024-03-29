const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const { Op } = require("sequelize");

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

  /* ------------ Ver detalle y descripcion de un producto POR CATEGORIA ------------ */

  detailCategory: (req, res) => {
    let categoriaID = req.params.category_id;

    db.Products.findAll({
      include: [{ association: "categories" }, { association: "series" }],
      where: { category_id: categoriaID },
    }).then(function (fiterProducts) {
      let products = [];
      for (let x = 0; x < fiterProducts.length; x++) {
        if (fiterProducts[x].deleted == 0) {
          products.push(fiterProducts[x]);
        }
      }

      if (fiterProducts != null) {
        res.render("./products/productCategory", {
          products: products,
        });
      } else {
        res.render("./products/not-found-products", {
          especificacion: "Aún no tenemos productos del anime",
        });
      }
    });
  },

  /* ------------ Ver detalle y descripcion de un producto POR ANIME ------------ */
  detailAnime: (req, res) => {
    let serieID = req.params.serie_id;

    db.Products.findAll({
      include: [{ association: "categories" }, { association: "series" }],
      where: { serie_id: serieID },
    }).then(function (fiterProducts) {
      let products = [];
      for (let x = 0; x < fiterProducts.length; x++) {
        if (fiterProducts[x].deleted == 0) {
          products.push(fiterProducts[x]);
        }
      }

      if (fiterProducts != null) {
        res.render("./products/productAnime", {
          products: products,
        });
      } else {
        res.render("./products/not-found-products", {
          especificacion: "Aún no tenemos productos del anime",
        });
      }
    });
  },

  /* Ver el listado completo de productos */
  verMas: (req, res) => {
    db.Products.findAll().then(function (products) {
      let offerProducts = [];
      let noOfferProducts = [];
      for (let x = 0; x < products.length; x++) {
        if (products[x].deleted != 1) {
          if (products[x].discount != 0) {
            offerProducts.push(products[x]);
          } else {
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

  /* --------------------------- AGREGAR VISTA PARA VER MAS PRODUCTOS POR ANIME --------------------------- */
  verMasAnime: (req, res) => {
    db.Products.findAll().then(function (products) {
      let offerProducts = [];
      let noOfferProducts = [];
      for (let x = 0; x < products.length; x++) {
        if (products[x].deleted != 1) {
          if (products[x].discount != 0) {
            offerProducts.push(products[x]);
          } else {
            noOfferProducts.push(products[x]);
          }
        }
      }
      res.render("./products/productVerMasAnime", {
        products: products,
        offerProducts: offerProducts,
        noOfferProducts: noOfferProducts,
      });
    });
  },

  Buscar: (req, res) => {
    let searchProduct = req.body.value;

    db.Products.findAll({
      where: {
        name: { [Op.like]: "%" + searchProduct + "%" },
      },
    }).then(function (products) {
      if (products == "") {
        res.render("./products/not-found-products", {
          especificacion: "No encontramos el producto",
        });
      } else {
        let offerProducts = [];
        let noOfferProducts = [];
        for (let x = 0; x < products.length; x++) {
          if (products[x].deleted != 1) {
            if (products[x].discount != 0) {
              offerProducts.push(products[x]);
            } else {
              noOfferProducts.push(products[x]);
            }
          }
        }
        res.render("./products/productVerMas", {
          products: products,
          offerProducts: offerProducts,
          noOfferProducts: noOfferProducts,
        });
      }
    });
  },

  productExtractADMIN: (req, res) => {
    if (req.session.usuario == undefined) {
      return res.render("./users/login", { msg: "" });
    } else {
      db.Products.findAll().then(function (allProducts) {
        db.Categories.findAll().then(function (allCategories) {
          db.Series.findAll().then(function (allSeries) {
            res.render("./products/productExtract", {
              products: allProducts,
              categories: allCategories,
              series: allSeries,
            });
          });
        });
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
      let repetido = false;
      let dProduct;
      db.Products.findAll().then(function (allProducts) {
        for (let x = 0; x < allProducts.length; x++) {
          if (req.body.name == allProducts[x].name) {
            repetido = true;
            dProduct = allProducts[x]
          }
        }

        if (repetido == true) {
          return res.render("./products/productDuplicity", {
            product: dProduct,
            products: allProducts
          })
          /* return res.redirect("/"); */
        } else {
          let errors = validationResult(req);
          if (errors.isEmpty()) {
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
              .catch((err) => res.send(err));
          }
        }
      });
    }
  },

  /* Editar un producto existente*/
  edit: (req, res) => {
    if (req.session.usuario == undefined) {
      return res.render("./users/login", { msg: "" });
    } else {
      let productID = req.params.id;
      let errors = validationResult(req);
      if (errors.isEmpty()) {
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
          deleted: removeProduct,
        },
        {
          where: { id: req.params.id },
        }
      )
        .then(() => {
          res.redirect("/products");
        })
        .catch((error) => res.send(error));
    }
  },

  removeAdmin: (req, res) => {
    if (req.session.usuario == undefined) {
      return res.render("./users/login", { msg: "" });
    } else {
      let productID = req.params.id;
      dbProducts.update(
        {
          deleted: true,
        },
        { where: { id: productID } }
      )
        //.destroy({ where: { id: productID }, force: true })
        .then(() => {
          return res.redirect("/products/extractADMIN");
        })
        .catch((err) => res.send(err));
    }
  },

  resetAdmin: (req, res) => {
    let productID = req.params.id;
    db.Products.findByPk(productID).then(function (product) {
      if (product.deleted == true) {
        dbProducts
          .update(
            {
              deleted: false,
            },
            { where: { id: productID } }
          )
          .then(() => {
            return res.redirect("/products/extractADMIN");
          })
          .catch((err) => res.send(err));
      } else {
        dbProducts
          .update(
            {
              deleted: true,
            },
            { where: { id: productID } }
          )
          .then(() => {
            return res.redirect("/products/extractADMIN");
          })
          .catch((err) => res.send(err));
      }
    });
  },
};

module.exports = controller;