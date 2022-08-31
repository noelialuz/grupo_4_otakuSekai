const express = require("express");
const router = express.Router();

const apiUserController = require("../../controller/api/apiUserController.js")

router.get('/', apiUserController.list);
router.get('/:id', apiUserController.user);

module.exports = router