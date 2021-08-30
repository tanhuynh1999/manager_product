const express = require('express');
const productController = require('../app/controllers/product.js');

const router = express.Router();

router.get('/quanlysanpham', productController.getAllProduct);

router.get('/json-product', productController.getJsonProduct);
module.exports = router;