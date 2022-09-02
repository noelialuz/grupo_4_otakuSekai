const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
const { Op } = require("sequelize");

const dbProducts = db.Products;

const productsController = {
  //funciones de la api Productos
  list: (req, res) => {
    db.Products.findAll().then(function (allProducts) {
      db.Categories.findAll().then(function (allCategories) {
        let countByCategory = {};

        for (let i = 0; i < allCategories.length; i++) {
          let contador = 0;

          for (let x = 0; x < allProducts.length; x++) {
            if (allProducts[x].category_id == allCategories[i].id) {
              contador = contador + 1;
            }
          }
          countByCategory[allCategories[i].description] = contador;
        }

        let products = [];
        let product = {};

        for (let b = 0; b < allProducts.length; b++) {
          product = {
            id: allProducts[b].id,
            name: allProducts[b].name,
            description: allProducts[b].description,
            relations: ["Categories", "Series"],
            detail: "api/products/" + allProducts[b].id,
            image:  allProducts[b].image
          };
          products.push(product);
        }
        return res.status(200).json({
          meta: {
            count: allProducts.length,
            status: 200,
            url: "api/products",
          },
          countByCategory: countByCategory,
          data: products,
        });
      });
    }).catch((error) => res.status(400).json({
      meta: {
        status: 400,
        url: "api/products/" + req.params.id,
        msg: "Error al listar productos.  " + error
      }
    }));
  },

  show: (req, res) => {
    db.Products.findByPk(req.params.id).then(function (product) {
      if (product != null){
        return res.status(200).json({
          meta: {
            status: 200,
            url: "api/products/:id",
          },
          data: product,
        });
      }
      else{
        res.status(404).json({
            meta: {
                status: 404,
                url: "api/products/" + req.params.id,
                msg: "No existe el producto " + req.params.id 
            }
        })
    }
    }).catch((error) => res.status(400).json({
      meta: {
        status: 400,
        url: "api/products/" + req.params.id,
        msg: "Error al buscar el producto " + req.params.id + ".  " + error
      }
    }));
},
  add: (req, res) => {
    db.Products.create(req.body).then(function (product) {
    return res.status(200).json({
      data: product,
      status: 200,
      created: "true",
    });
  }).catch((error) => res.status(400).json({
    meta: {
      status: 400,
      url: "api/products/",
      msg: "Error al crear el producto un nuevo producto." + error
    }
  }));
  },

delete: (req, res) => {
  db.Products.destroy({
    where: { id: req.params.id },
  }).then((respose) => {
    return res.json(respose);
  }).catch((error) => res.status(400).json({
    meta: {
      status: 400,
      url: "api/products/",
      msg: "Error al eliminar un producto. " + error
    }
  }));
},
};

module.exports = productsController;
