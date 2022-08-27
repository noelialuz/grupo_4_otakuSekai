const fs = require("fs");
const path = require("path");
const db = require("../../database/models");
const { Op } = require("sequelize");

const dbProducts = db.Products;


const productsController = {
    //funciones de la api Productos
  list: (req, res) => {
    db.Products.findAll().then(function (allProducts) {
        db.Categories.findAll().then(function (allCategories){

            let totales = [0, 0, 0, 0, 0, 0, 0]
            
        for (let x = 0; x < allProducts.length; x++) {
            ID = allProducts[x].category_id
            switch (ID) {
                case 1:
                    totales[0] = (totales[0] + 1) 
                    break;
                case 2:
                    totales[1] = (totales[1] + 1) 
                    break;
                case 3:
                    totales[2] = (totales[2] + 1) 
                    break;
                case 4:
                    totales[3] = (totales[3] + 1) 
                    break;
                case 5:
                    totales[4] = (totales[4] + 1)    
                    break;
                case 6:
                    totales[5] = (totales[5] + 1)    
                    break;
                case 7:
                    totales[6] = (totales[6] + 1)    
                    break;
                default:
                    break;
            }
        }

            return res.status(200).json({
                meta: {
                    count: allProducts.length,
                    status: 200,
                    url: 'api/products'
                },
                countByCategory: {
                Mangas: totales[0],
                Indumentaria: totales[1],
                Posters: totales[2],
                Figuras: totales[3],
                Tazas: totales[4],
                Llaveros: totales[5],
                Otros: totales[6]
            },
                data: allProducts
              })

        })
    })
  },


  show: (req, res) => {
    db.Products.findByPk(req.params.id).then(function (product) {
      return res.status(200).json({
        meta:{
            status: 200,
            url: 'api/products/:id'
        },
        data: product,
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