const express = require('express');
const productController = require('../app/controllers/product.js');

const router = express.Router();

router.get('/quanlysanpham', productController.getAllProduct);

router.get('/json-product', productController.getJsonProduct);

router.get('/json-bin-product', productController.getJsonBinProduct);

router.get('/json-follow-product', productController.getJsonFollowProduct);

router.get('/json-note-product', productController.getJsonNoteProduct);

router.get('/product/:id/bin', productController.binProduct);

module.exports = router;