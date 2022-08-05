const fs = require('fs');
const path = require('path');
// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const db = require("../database/models");

const controller = {
    index: (req, res) => {
       // const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        db.Categories.findAll().then(function(category) {
            db.Products.findAll().then(function(allProducts){
                let offerProducts = [];
                for (let x = 0; x < allProducts.length; x++) {
                    if (
                        allProducts[x].discount != 0 && allProducts[x].deleted == 0
                    ) {
                      offerProducts.push(allProducts[x]);
                    }
                  }
                
                  if (req.params.categories == allProducts.category_id) {
                      res.render('index', {
                          category,
                          offerProducts: offerProducts});
                  }
                  else{
                    res.render('./varios/sitioEnConstruccion')
                  }

            })

        });
    },

    quienesSomos: (req, res) => {
        res.render('./varios/quienesSomos')
    },

    enConstruccion: (req, res) => {
        res.render('./varios/sitioEnConstruccion')
    }
};


module.exports = controller;