const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const db = require("../database/models");

const controller = {
  index: (req, res) => {
    db.Products.findAll().then(function (allProducts) {
      let offerProducts = [];

      for (let x = 0; x < allProducts.length; x++) {
        if (allProducts[x].discount != 0) {
          offerProducts.push(allProducts[x]);
        }
      }
      res.render("index", { offerProducts: offerProducts });
    });
  },

  quienesSomos: (req, res) => {
    res.render("./varios/quienesSomos");
  },

  enConstruccion: (req, res) => {
    res.render("./varios/sitioEnConstruccion");
  },
};

module.exports = controller;
