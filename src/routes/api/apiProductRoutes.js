const express = require("express");
const router = express.Router();

const apiProductController = require("../../controller/api/apiProductController.js")

router.get('/', apiProductController.list)
router.get('/:id', apiProductController.show)
router.post('/add', apiProductController.add)
router.delete('/delete/:id', apiProductController.delete)

module.exports = router