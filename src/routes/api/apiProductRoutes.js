const express = require("express");
const router = express.Router();

const apiProductController = require("../../controller/api/apiProductController.js")

router.get('/products', apiProductController.list)
router.get('/products/:id', apiProductController.show)
router.post('/add', apiProductController.add)
router.delete('/delete/:id', apiProductController.delete)

module.exports = router