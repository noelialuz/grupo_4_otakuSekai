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
    });
  },

  show: (req, res) => {
    db.Products.findByPk(req.params.id).then(function (product) {
      return res.status(200).json({
        meta: {
          status: 200,
          url: "api/products/:id",
        },
        data: product,
      });
    });
  },
  add: (req, res) => {
    db.Products.create(req.body).then(function (product) {
      return res.status(200).json({
        data: product,
        status: 200,
        created: "true",
      });
    });
  },

  delete: (req, res) => {
    db.Products.destroy({
      where: { id: req.params.id },
    }).then((respose) => {
      return res.json(respose);
    });
  },
};

module.exports = productsController;
