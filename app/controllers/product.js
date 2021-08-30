const mongoose = require('mongoose');
const Product = require('../models/product');

class ProductController{
    getAllProduct = (req,res) => {
        res.render('product/index');
    }

    //Json List
    getJsonProduct = (req, res, next) => {
        Product.find({}, function(err, product){
            res.json( {
                data: product,
                success: true
            });
        });
    }
}

module.exports = new ProductController();