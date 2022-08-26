const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
const { Op } = require("sequelize");

const dbProducts = db.Products;


const productsController = {
    //funciones de la api Productos
  list: (req, res) => {
    db.Products.findAll().then(function (allProducts) {
      return res.status(200).json({
        total: allProducts.length,
        data: allProducts,
        status: 200
      })
    })
  },
  show: (req, res) => {
    db.Products.findByPk(req.params.id).then(function (product) {
      return res.status(200).json({
        data: product,
        status: 200
      })
    })
  },
  add: (req, res) => {
    db.Products
    .create(req.body)
    .then(function (product){
      return res.status(200).json({
        data: product,
        status: 200,
        created: 'true'
      })
    })
  },

  delete: (req, res) => {
    db.Products
    .destroy({
      where: {id: req.params.id}
    })
    .then(respose => {
      return res.json(respose)
    })
  },
}

module.exports = productsController;